#!/usr/bin/env python3
"""Fetch GA4 summary metrics and write data/analytics-summary.json."""

from __future__ import annotations

import json
import os
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

import requests
from google.auth.transport.requests import Request
from google.oauth2 import service_account


SCOPES = ["https://www.googleapis.com/auth/analytics.readonly"]
API_BASE = "https://analyticsdata.googleapis.com/v1beta"


def env_required(name: str) -> str:
    value = os.getenv(name, "").strip()
    if not value:
        raise RuntimeError(f"Missing required environment variable: {name}")
    return value


def parse_service_account() -> dict[str, Any]:
    raw_json = os.getenv("GA_SERVICE_ACCOUNT_JSON", "").strip()
    if not raw_json:
        raise RuntimeError("Missing GA_SERVICE_ACCOUNT_JSON secret value.")
    try:
        return json.loads(raw_json)
    except json.JSONDecodeError as exc:
        raise RuntimeError("GA_SERVICE_ACCOUNT_JSON is not valid JSON.") from exc


def get_access_token(service_account_info: dict[str, Any]) -> str:
    creds = service_account.Credentials.from_service_account_info(
        service_account_info,
        scopes=SCOPES,
    )
    creds.refresh(Request())
    if not creds.token:
        raise RuntimeError("Unable to obtain Google access token.")
    return creds.token


def api_post(
    property_id: str,
    method_name: str,
    body: dict[str, Any],
    access_token: str,
) -> dict[str, Any]:
    url = f"{API_BASE}/properties/{property_id}:{method_name}"
    response = requests.post(
        url,
        headers={
            "Authorization": f"Bearer {access_token}",
            "Content-Type": "application/json",
        },
        json=body,
        timeout=45,
    )
    if not response.ok:
        raise RuntimeError(f"{method_name} failed ({response.status_code}): {response.text}")
    return response.json()


def metric_value(row: dict[str, Any], index: int = 0) -> int:
    values = row.get("metricValues", [])
    if index >= len(values):
        return 0
    try:
        return int(values[index].get("value", "0"))
    except (TypeError, ValueError):
        return 0


def dim_value(row: dict[str, Any], index: int = 0) -> str:
    values = row.get("dimensionValues", [])
    if index >= len(values):
        return ""
    return str(values[index].get("value", ""))


def hour_label(hour: int) -> str:
    start = f"{hour:02d}:00"
    end = f"{(hour + 1) % 24:02d}:00"
    return f"{start} - {end}"


def main() -> None:
    property_id = env_required("GA_PROPERTY_ID")
    measurement_id = os.getenv("GA_MEASUREMENT_ID", "G-QRQJVRGK5M").strip() or "G-QRQJVRGK5M"
    service_account_info = parse_service_account()
    access_token = get_access_token(service_account_info)

    daily_result = api_post(
        property_id,
        "runReport",
        {
            "dateRanges": [{"startDate": "14daysAgo", "endDate": "today"}],
            "dimensions": [{"name": "date"}],
            "metrics": [{"name": "screenPageViews"}],
            "orderBys": [{"dimension": {"dimensionName": "date"}}],
        },
        access_token,
    )

    country_result = api_post(
        property_id,
        "runReport",
        {
            "dateRanges": [{"startDate": "30daysAgo", "endDate": "today"}],
            "dimensions": [{"name": "country"}],
            "metrics": [{"name": "screenPageViews"}],
            "orderBys": [{"metric": {"metricName": "screenPageViews"}, "desc": True}],
            "limit": 10,
        },
        access_token,
    )

    hourly_result = api_post(
        property_id,
        "runReport",
        {
            "dateRanges": [{"startDate": "7daysAgo", "endDate": "today"}],
            "dimensions": [{"name": "hour"}],
            "metrics": [{"name": "screenPageViews"}],
            "orderBys": [{"dimension": {"dimensionName": "hour"}}],
        },
        access_token,
    )

    realtime_total = api_post(
        property_id,
        "runRealtimeReport",
        {
            "metrics": [{"name": "activeUsers"}],
        },
        access_token,
    )

    realtime_countries = api_post(
        property_id,
        "runRealtimeReport",
        {
            "dimensions": [{"name": "country"}],
            "metrics": [{"name": "activeUsers"}],
            "orderBys": [{"metric": {"metricName": "activeUsers"}, "desc": True}],
            "limit": 5,
        },
        access_token,
    )

    realtime_cities = api_post(
        property_id,
        "runRealtimeReport",
        {
            "dimensions": [{"name": "city"}],
            "metrics": [{"name": "activeUsers"}],
            "orderBys": [{"metric": {"metricName": "activeUsers"}, "desc": True}],
            "limit": 5,
        },
        access_token,
    )

    daily_rows = [
        {
            "date": dim_value(row, 0),
            "views": metric_value(row, 0),
        }
        for row in daily_result.get("rows", [])
    ]

    country_rows = [
        {
            "country": dim_value(row, 0) or "Unknown",
            "views": metric_value(row, 0),
        }
        for row in country_result.get("rows", [])
    ]

    hourly_rows = []
    for row in hourly_result.get("rows", []):
        hour = int(dim_value(row, 0) or "0")
        hourly_rows.append(
            {
                "hour": hour,
                "hourLabel": hour_label(hour),
                "views": metric_value(row, 0),
            }
        )

    total_views_14d = sum(item["views"] for item in daily_rows)
    top_country = country_rows[0] if country_rows else {"country": "Unknown", "views": 0}
    peak_hour = max(hourly_rows, key=lambda item: item["views"], default={"hour": 0, "hourLabel": "00:00 - 01:00", "views": 0})

    realtime_active_users = 0
    if realtime_total.get("rows"):
        realtime_active_users = metric_value(realtime_total["rows"][0], 0)

    realtime_country_rows = [
        {
            "country": dim_value(row, 0) or "Unknown",
            "activeUsers": metric_value(row, 0),
        }
        for row in realtime_countries.get("rows", [])
    ]

    realtime_city_rows = [
        {
            "city": dim_value(row, 0) or "Unknown",
            "activeUsers": metric_value(row, 0),
        }
        for row in realtime_cities.get("rows", [])
    ]

    snapshot = {
        "generatedAtUtc": datetime.now(timezone.utc).isoformat(),
        "measurementId": measurement_id,
        "propertyId": property_id,
        "timezone": daily_result.get("metadata", {}).get("timeZone", ""),
        "stats": {
            "totalViews14d": total_views_14d,
            "topCountry": top_country,
            "peakHour": peak_hour,
            "activeUsersNow": realtime_active_users,
        },
        "dailyViews": daily_rows,
        "countryViews": country_rows,
        "hourlyViews": hourly_rows,
        "realtime": {
            "activeUsers": realtime_active_users,
            "topCountries": realtime_country_rows,
            "topCities": realtime_city_rows,
        },
    }

    output_path = Path("data/analytics-summary.json")
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(json.dumps(snapshot, indent=2), encoding="utf-8")
    print(f"Wrote {output_path}")


if __name__ == "__main__":
    main()
