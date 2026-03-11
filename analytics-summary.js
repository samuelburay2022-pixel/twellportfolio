(function initializeAnalyticsSummaryPage() {
  const query = new URLSearchParams(window.location.search);
  const defaultConfig = {
    measurementId: "G-QRQJVRGK5M",
    liveSiteUrl: "https://samuelburay2022-pixel.github.io/TwellPortfolio/",
    propertyId: "527769702",
    oauthClientId: "182752428348-4kqf7ejk69tlq89ciq5t5eot6agfsnpv.apps.googleusercontent.com",
    dashboardUrl: "https://analytics.google.com/analytics/web/",
  };

  const config = {
    measurementId: (query.get("measurementId") || defaultConfig.measurementId).trim(),
    liveSiteUrl: (query.get("liveSite") || defaultConfig.liveSiteUrl).trim(),
    propertyId: (query.get("propertyId") || defaultConfig.propertyId).trim(),
    oauthClientId: (query.get("oauthClientId") || defaultConfig.oauthClientId).trim(),
    dashboardUrl: (query.get("dashboard") || defaultConfig.dashboardUrl).trim(),
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
    return new Intl.NumberFormat().format(value);
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

  const refreshSummary = async () => {
    if (!authState.accessToken) {
      setStatus("Connect Google Analytics first.", "error");
      return;
    }

    setStatus("Loading analytics summary...");
    refreshButton.disabled = true;

    try {
      const [dailyResult, countryResult, hourlyResult] = await Promise.all([
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
      ]);

      const dailyRows = (dailyResult.rows || []).map((row) => ({
        label: formatDate(row.dimensionValues?.[0]?.value || ""),
        value: toInt(row.metricValues?.[0]?.value),
      }));

      const countryRows = (countryResult.rows || []).map((row) => ({
        label: row.dimensionValues?.[0]?.value || "Unknown",
        value: toInt(row.metricValues?.[0]?.value),
      }));

      const hourlyRows = (hourlyResult.rows || []).map((row) => ({
        label: formatHourRange(row.dimensionValues?.[0]?.value || "0"),
        value: toInt(row.metricValues?.[0]?.value),
      }));

      renderTableRows(dailyViewsBody, dailyRows, "No daily view data yet.");
      renderTableRows(countryViewsBody, countryRows, "No country/place data yet.");
      renderTableRows(hourlyViewsBody, hourlyRows, "No time-based data yet.");

      const totalViews = dailyRows.reduce((sum, row) => sum + row.value, 0);
      const topCountry = countryRows[0] || null;
      const peakHour = hourlyRows.reduce(
        (best, row) => {
          if (!best || row.value > best.value) {
            return row;
          }
          return best;
        },
        null
      );

      totalViewsElement.textContent = formatNumber(totalViews);
      topCountryElement.textContent = topCountry
        ? `${topCountry.label} (${formatNumber(topCountry.value)})`
        : "-";
      peakHourElement.textContent = peakHour
        ? `${peakHour.label} (${formatNumber(peakHour.value)})`
        : "-";

      const timezone =
        dailyResult.metadata?.timeZone ||
        countryResult.metadata?.timeZone ||
        hourlyResult.metadata?.timeZone ||
        "";
      timezoneElement.textContent = timezone || "Unknown";
      lastRefreshElement.textContent = new Date().toLocaleString();

      setStatus("Analytics summary updated.", "success");
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

  const initializeGoogleAuth = () => {
    if (!config.propertyId || !config.oauthClientId) {
      setStatus(
        "Set gaPropertyId and gaOAuthClientId in main.js, then log in again from the footer link.",
        "error"
      );
      connectButton.disabled = true;
      return;
    }

    if (!window.google || !google.accounts || !google.accounts.oauth2) {
      setStatus("Google authentication library did not load. Refresh this page and try again.", "error");
      connectButton.disabled = true;
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
        refreshSummary();
      },
    });

    setStatus("Click Connect Google Analytics to authorize data access.");
    connectButton.disabled = false;
  };

  connectButton.addEventListener("click", () => {
    if (!authState.tokenClient) {
      initializeGoogleAuth();
      return;
    }

    const prompt = authState.accessToken ? "" : "consent";
    authState.tokenClient.requestAccessToken({ prompt });
  });

  refreshButton.addEventListener("click", () => {
    refreshSummary();
  });

  if (document.readyState === "complete") {
    initializeGoogleAuth();
  } else {
    window.addEventListener("load", initializeGoogleAuth, { once: true });
  }
})();
