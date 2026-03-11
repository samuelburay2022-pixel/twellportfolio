# Teaching Portfolio Website

This is a lightweight static teaching portfolio site. Open `index.html` directly in a browser to view it.

## Files

- `index.html`: page structure and portfolio content
- `styles.css`: visual design and responsive layout
- `main.js`: scroll reveal effects, year, and dynamic photo/certificate cards
- `SamuelJr_Pana_Buray_CV.pdf`: downloadable CV linked from the site
- `assets/photos/`: profile and teaching photos used in the gallery
- `assets/pdf-previews/`: auto-generated thumbnail previews for PDF cards
- `Logos/`: platform/tool logos shown above the profile photo
- `Teaching_Photos/`: teaching gallery image files
- `Certificates_Files/`: certificate image/PDF files
- `Transcripts/`: transcript and academic credential files
- `SchoolSystem_Project/`: Digital Edu Pro project brief, feature docs, and system screenshots
- `Books_Project/`: books project brief page
- `TeachingInnovation_Project/`: teaching innovation and application project brief page
- `analytics-summary.html`: owner analytics summary page (views/day, country/place, time)
- `analytics-summary.css`: styling for analytics summary page
- `analytics-summary.js`: auto snapshot loading + optional manual GA live query
- `data/analytics-summary.json`: published analytics snapshot consumed by the summary page
- `scripts/fetch_ga_summary.py`: GA4 data fetch script for scheduled automation
- `.github/workflows/update-analytics-summary.yml`: hourly GitHub Actions pipeline for analytics snapshot updates

## Customize

- Change the name, email, and section copy in `index.html`.
- Update `SamuelJr_Pana_Buray_CV.pdf` when you have a newer CV and keep the same filename if you want the existing link to keep working.
- Edit or delete teaching photo cards in `main.js` under `teachingPhotos` (title, description, and file path).
- Edit or delete certificate cards in `main.js` under `certificateItems` (title, description, and file path).
- Edit or delete transcript cards in `main.js` under `transcriptItems` (title, description, and file path).
- Add or remove logo icons in `main.js` under `logoItems`.
- Add or remove extra top-row logos in `main.js` under `extraLogoItems` (horizontal row above the main logo grid).
- Edit highlighted credential logos below the profile photo in `main.js` under `highlightLogoItems` (for MCE and NBDB).
- Put new teaching images in `Teaching_Photos/`, certificate files in `Certificates_Files/`, and transcript files in `Transcripts/`.
- Update the school system project page/content in `SchoolSystem_Project/index.html` and `SchoolSystem_Project/FEATURES.md`.
- Update book and innovation project brief pages in `Books_Project/index.html` and `TeachingInnovation_Project/index.html`.
- Configure analytics summary access in `main.js` under `visitorsAnalyticsConfig` (`liveSiteUrl`, `gaPropertyId`, `gaOAuthClientId`, `analyticsSummaryPage`).
- If you add new PDF files, generate a thumbnail into `assets/pdf-previews/` so cards show image previews.

## Auto Analytics Setup (Recommended)

1. In Google Cloud, enable the **Analytics Data API**.
2. Create a **Service Account** and download its JSON key.
3. In GA4 property `527769702`, add the service account email as at least **Viewer**.
4. In GitHub repo settings, add these Secrets:
   - `GA_PROPERTY_ID` = `527769702`
   - `GA_MEASUREMENT_ID` = `G-QRQJVRGK5M`
   - `GA_SERVICE_ACCOUNT_JSON` = full service-account JSON content
5. Run workflow **Update Analytics Summary** once manually (Actions tab), then it runs hourly.

This updates `data/analytics-summary.json` automatically, and `analytics-summary.html` loads it without manual Google login.
