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
- If you add new PDF files, generate a thumbnail into `assets/pdf-previews/` so cards show image previews.
