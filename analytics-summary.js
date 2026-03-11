(function initializeAnalyticsSummaryPage() {
  const query = new URLSearchParams(window.location.search);
  const defaultConfig = {
    measurementId: "G-QRQJVRGK5M",
    liveSiteUrl: "https://samuelburay2022-pixel.github.io/TwellPortfolio/",
    propertyId: "527769702",
    oauthClientId: "182752428348-4kqf7ejk69tlq89ciq5t5eot6agfsnpv.apps.googleusercontent.com",
    dashboardUrl: "https://analytics.google.com/analytics/web/",
    summaryJsonPath: "data/analytics-summary.json",
  };

  const config = {
    measurementId: (query.get("measurementId") || defaultConfig.measurementId).trim(),
    liveSiteUrl: (query.get("liveSite") || defaultConfig.liveSiteUrl).trim(),
    propertyId: (query.get("propertyId") || defaultConfig.propertyId).trim(),
    oauthClientId: (query.get("oauthClientId") || defaultConfig.oauthClientId).trim(),
    dashboardUrl: (query.get("dashboard") || defaultConfig.dashboardUrl).trim(),
    summaryJsonPath: (query.get("summaryJson") || defaultConfig.summaryJsonPath).trim(),
  };

  const connectButton = document.getElementById("ga-connect-button");
  const refreshButton = document.getElementById("ga-refresh-button");
  const liveSiteLink = document.getElementById("open-live-site-link");
  const dashboardLink = document.getElementById("open-dashboard-link");
  const statusLine = document.getElementById("ga-status-line");

  const measurementIdElement = document.getElementById("meta-measurement-id");
  const liveSiteUrlElement = document.getElementById("meta-live-site-url");
  const propertyIdElement = document.getElementById("meta-property-id");
  const timezoneElement = document.getElementById("meta-timezone");
  const lastRefreshElement = document.getElementById("meta-last-refresh");

  const totalViewsElement = document.getElementById("stat-total-views");
  const topCountryElement = document.getElementById("stat-top-country");
  const peakHourElement = document.getElementById("stat-peak-hour");
  const activeUsersElement = document.getElementById("stat-active-users");

  const dailyViewsBody = document.getElementById("daily-views-body");
  const countryViewsBody = document.getElementById("country-views-body");
  const hourlyViewsBody = document.getElementById("hourly-views-body");

  if (
    !connectButton ||
    !refreshButton ||
    !liveSiteLink ||
    !dashboardLink ||
    !statusLine ||
    !measurementIdElement ||
    !liveSiteUrlElement ||
    !propertyIdElement ||
    !timezoneElement ||
    !lastRefreshElement ||
    !totalViewsElement ||
    !topCountryElement ||
    !peakHourElement ||
    !activeUsersElement ||
    !dailyViewsBody ||
    !countryViewsBody ||
    !hourlyViewsBody
  ) {
    return;
  }

  const fallbackLiveSiteUrl = new URL("index.html", window.location.href).toString();
  const resolvedLiveSiteUrl = config.liveSiteUrl || fallbackLiveSiteUrl;

  if (resolvedLiveSiteUrl) {
    liveSiteLink.href = resolvedLiveSiteUrl;
    liveSiteUrlElement.textContent = resolvedLiveSiteUrl;
  } else {
    liveSiteLink.removeAttribute("href");
    liveSiteLink.setAttribute("aria-disabled", "true");
    liveSiteUrlElement.textContent = "Not set";
  }

  if (config.dashboardUrl) {
    dashboardLink.href = config.dashboardUrl;
  } else {
    dashboardLink.removeAttribute("href");
    dashboardLink.setAttribute("aria-disabled", "true");
  }

  measurementIdElement.textContent = config.measurementId || "Not set";
  propertyIdElement.textContent = config.propertyId || "Not set";

  const authState = {
    tokenClient: null,
    accessToken: "",
  };

  const setStatus = (text, tone = "") => {
    statusLine.textContent = text;
    statusLine.classList.remove("is-error", "is-success");
    if (tone) {
      statusLine.classList.add(`is-${tone}`);
    }
  };

  const toInt = (value) => {
    const parsed = Number.parseInt(value || "0", 10);
    return Number.isFinite(parsed) ? parsed : 0;
  };

  const formatNumber = (value) => {
    return new Intl.NumberFormat().format(toInt(value));
  };

  const extractApiErrorMessage = (rawErrorText, fallbackStatusCode) => {
    if (!rawErrorText) {
      return `Request failed (${fallbackStatusCode}).`;
    }

    try {
      const parsed = JSON.parse(rawErrorText);
      const details = parsed?.error;
      if (details?.message) {
        return details.message;
      }
      if (details?.status) {
        return `Request failed (${details.status}).`;
      }
    } catch (_error) {
      // Keep fallback below when response is not JSON.
    }

    const compact = rawErrorText.replace(/\s+/g, " ").trim();
    return compact || `Request failed (${fallbackStatusCode}).`;
  };

  const formatDate = (yyyymmdd) => {
    if (!yyyymmdd || yyyymmdd.length !== 8) {
      return yyyymmdd || "-";
    }
    const yyyy = yyyymmdd.slice(0, 4);
    const mm = yyyymmdd.slice(4, 6);
    const dd = yyyymmdd.slice(6, 8);
    const parsed = new Date(`${yyyy}-${mm}-${dd}T00:00:00`);
    if (Number.isNaN(parsed.getTime())) {
      return yyyymmdd;
    }
    return parsed.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatHourRange = (hourString) => {
    const hour = toInt(hourString);
    const start = String(hour).padStart(2, "0");
    const next = String((hour + 1) % 24).padStart(2, "0");
    return `${start}:00 - ${next}:00`;
  };

  const renderTableRows = (tbody, rows, emptyLabel) => {
    tbody.innerHTML = "";

    if (!rows.length) {
      const emptyRow = document.createElement("tr");
      const emptyCell = document.createElement("td");
      emptyCell.colSpan = 2;
      emptyCell.textContent = emptyLabel;
      emptyRow.appendChild(emptyCell);
      tbody.appendChild(emptyRow);
      return;
    }

    rows.forEach((row) => {
      const tr = document.createElement("tr");
      const colA = document.createElement("td");
      const colB = document.createElement("td");
      colA.textContent = row.label;
      colB.textContent = formatNumber(row.value);
      tr.appendChild(colA);
      tr.appendChild(colB);
      tbody.appendChild(tr);
    });
  };

  const renderSnapshot = (snapshot, sourceLabel) => {
    const dailyRows = (snapshot.dailyViews || []).map((row) => ({
      label: formatDate(row.date || ""),
      value: toInt(row.views),
    }));

    const countryRows = (snapshot.countryViews || []).map((row) => ({
      label: row.country || "Unknown",
      value: toInt(row.views),
    }));

    const hourlyRows = (snapshot.hourlyViews || []).map((row) => ({
      label: formatHourRange(row.hour),
      value: toInt(row.views),
    }));

    renderTableRows(dailyViewsBody, dailyRows, "No daily view data yet.");
    renderTableRows(countryViewsBody, countryRows, "No country/place data yet.");
    renderTableRows(hourlyViewsBody, hourlyRows, "No time-based data yet.");

    const totalViews = snapshot.stats?.totalViews14d ?? dailyRows.reduce((sum, row) => sum + row.value, 0);
    const topCountryData = snapshot.stats?.topCountry || countryRows[0] || null;
    const peakHourData =
      snapshot.stats?.peakHour ||
      hourlyRows.reduce((best, row) => {
        if (!best || row.value > best.value) {
          return row;
        }
        return best;
      }, null);
    const activeUsers = snapshot.stats?.activeUsersNow ?? snapshot.realtime?.activeUsers ?? 0;

    totalViewsElement.textContent = formatNumber(totalViews);
    topCountryElement.textContent = topCountryData
      ? `${topCountryData.country || topCountryData.label || "Unknown"} (${formatNumber(topCountryData.views || topCountryData.value || 0)})`
      : "-";
    peakHourElement.textContent = peakHourData
      ? `${peakHourData.hourLabel || peakHourData.label || formatHourRange(peakHourData.hour || 0)} (${formatNumber(peakHourData.views || peakHourData.value || 0)})`
      : "-";
    activeUsersElement.textContent = formatNumber(activeUsers);

    timezoneElement.textContent = snapshot.timezone || "Unknown";
    if (snapshot.generatedAtUtc) {
      const generatedAt = new Date(snapshot.generatedAtUtc);
      lastRefreshElement.textContent = Number.isNaN(generatedAt.getTime())
        ? snapshot.generatedAtUtc
        : generatedAt.toLocaleString();
    } else {
      lastRefreshElement.textContent = "Unknown";
    }

    setStatus(sourceLabel, "success");
  };

  const loadPublishedSummary = async () => {
    const path = config.summaryJsonPath || "data/analytics-summary.json";
    const endpoint = `${path}${path.includes("?") ? "&" : "?"}t=${Date.now()}`;

    try {
      setStatus("Loading latest analytics snapshot...");
      const response = await fetch(endpoint, {
        cache: "no-store",
      });
      if (!response.ok) {
        throw new Error(`Snapshot file not available (${response.status}).`);
      }

      const snapshot = await response.json();
      if (!snapshot || typeof snapshot !== "object") {
        throw new Error("Invalid snapshot format.");
      }

      renderSnapshot(snapshot, "Loaded auto-updated analytics snapshot.");
      return true;
    } catch (error) {
      console.error(error);
      setStatus("Auto snapshot not available yet. Use manual Google connect below.", "error");
      return false;
    }
  };

  const runReport = async (requestBody) => {
    const endpoint = `https://analyticsdata.googleapis.com/v1beta/properties/${encodeURIComponent(config.propertyId)}:runReport`;
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${authState.accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(extractApiErrorMessage(errorText, response.status));
    }

    return response.json();
  };

  const runRealtimeReport = async (requestBody) => {
    const endpoint = `https://analyticsdata.googleapis.com/v1beta/properties/${encodeURIComponent(config.propertyId)}:runRealtimeReport`;
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${authState.accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(extractApiErrorMessage(errorText, response.status));
    }

    return response.json();
  };

  const refreshSummaryManual = async () => {
    if (!authState.accessToken) {
      setStatus("Connect Google Analytics first.", "error");
      return;
    }

    setStatus("Loading live analytics...");
    refreshButton.disabled = true;

    try {
      const [dailyResult, countryResult, hourlyResult, realtimeTotal] = await Promise.all([
        runReport({
          dateRanges: [{ startDate: "14daysAgo", endDate: "today" }],
          dimensions: [{ name: "date" }],
          metrics: [{ name: "screenPageViews" }],
          orderBys: [{ dimension: { dimensionName: "date" } }],
        }),
        runReport({
          dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
          dimensions: [{ name: "country" }],
          metrics: [{ name: "screenPageViews" }],
          orderBys: [{ metric: { metricName: "screenPageViews" }, desc: true }],
          limit: 10,
        }),
        runReport({
          dateRanges: [{ startDate: "7daysAgo", endDate: "today" }],
          dimensions: [{ name: "hour" }],
          metrics: [{ name: "screenPageViews" }],
          orderBys: [{ dimension: { dimensionName: "hour" } }],
        }),
        runRealtimeReport({
          metrics: [{ name: "activeUsers" }],
        }),
      ]);

      const snapshot = {
        generatedAtUtc: new Date().toISOString(),
        timezone:
          dailyResult.metadata?.timeZone ||
          countryResult.metadata?.timeZone ||
          hourlyResult.metadata?.timeZone ||
          "",
        dailyViews: (dailyResult.rows || []).map((row) => ({
          date: row.dimensionValues?.[0]?.value || "",
          views: toInt(row.metricValues?.[0]?.value),
        })),
        countryViews: (countryResult.rows || []).map((row) => ({
          country: row.dimensionValues?.[0]?.value || "Unknown",
          views: toInt(row.metricValues?.[0]?.value),
        })),
        hourlyViews: (hourlyResult.rows || []).map((row) => ({
          hour: row.dimensionValues?.[0]?.value || "0",
          views: toInt(row.metricValues?.[0]?.value),
        })),
        realtime: {
          activeUsers: toInt(realtimeTotal.rows?.[0]?.metricValues?.[0]?.value),
        },
      };

      renderSnapshot(snapshot, "Loaded live analytics from Google API.");
    } catch (error) {
      console.error(error);
      const detail = error && error.message ? error.message : "Unknown error";
      const hint =
        " Check property access, enable Analytics Data API, and confirm OAuth authorized origins.";
      setStatus(`Unable to load summary data: ${detail}.${hint}`, "error");
    } finally {
      refreshButton.disabled = false;
    }
  };

  const initializeGoogleAuth = (hasAutoSnapshot) => {
    if (!config.propertyId || !config.oauthClientId) {
      connectButton.disabled = true;
      if (!hasAutoSnapshot) {
        setStatus("Set gaPropertyId and gaOAuthClientId in main.js to use manual live query.", "error");
      }
      return;
    }

    if (!window.google || !google.accounts || !google.accounts.oauth2) {
      connectButton.disabled = true;
      if (!hasAutoSnapshot) {
        setStatus("Google auth library did not load. Refresh and try again.", "error");
      }
      return;
    }

    authState.tokenClient = google.accounts.oauth2.initTokenClient({
      client_id: config.oauthClientId,
      scope: "https://www.googleapis.com/auth/analytics.readonly",
      callback: (tokenResponse) => {
        if (!tokenResponse || tokenResponse.error) {
          setStatus("Google sign-in failed. Please try again.", "error");
          return;
        }

        authState.accessToken = tokenResponse.access_token || "";
        refreshButton.disabled = false;
        connectButton.textContent = "Reconnect Google Analytics";
        refreshSummaryManual();
      },
    });

    connectButton.disabled = false;
    refreshButton.disabled = !authState.accessToken;
    if (!hasAutoSnapshot) {
      setStatus("Click Connect Google Analytics to run a manual live query.");
    }
  };

  connectButton.addEventListener("click", () => {
    if (!authState.tokenClient) {
      return;
    }

    const prompt = authState.accessToken ? "" : "consent";
    authState.tokenClient.requestAccessToken({ prompt });
  });

  refreshButton.addEventListener("click", () => {
    refreshSummaryManual();
  });

  const boot = async () => {
    const hasAutoSnapshot = await loadPublishedSummary();
    initializeGoogleAuth(hasAutoSnapshot);
  };

  if (document.readyState === "complete") {
    boot();
  } else {
    window.addEventListener("load", boot, { once: true });
  }
})();
