/*
  CONTENT EDITING GUIDE
  1) Add / remove logos in `logoItems` and `extraLogoItems`.
  2) Edit highlighted logos below profile photo in `highlightLogoItems`.
  3) Add / edit / delete teaching photos in the `teachingPhotos` list.
  4) Add / edit / delete certificates in the `certificateItems` list.
  5) Add / edit / delete transcripts in the `transcriptItems` list.
  6) Add / edit content manager work in the `contentManager...` lists.
  7) Add / edit operations app logos in `operationsApplicationLogoItems`.
  8) Configure owner analytics page settings in `visitorsAnalyticsConfig`.
  9) Keep file paths relative to this project root.
*/

const teachingPhotos = [
  {
    file: "Teaching_Photos/Positive_Environment.jpg",
    title: "Positive Environment",
    description: "Warm, student-friendly classroom atmosphere.",
    alt: "Teacher with students in a positive classroom environment",
  },
  {
    file: "Teaching_Photos/Computing Class.jpg",
    title: "Computing Class",
    description: "Students learning core computing skills.",
    alt: "Students in a computing class session",
  },
  {
    file: "Teaching_Photos/Coding Class.jpg",
    title: "Coding Class",
    description: "Coding activities with guided practice.",
    alt: "Students in a coding class",
  },
  {
    file: "Teaching_Photos/Coding_Sandpit.jpg",
    title: "Coding Sandpit",
    description: "Hands-on coding and problem-solving tasks.",
    alt: "Students participating in coding sandpit activity",
  },
  {
    file: "Teaching_Photos/Robotics_Test.jpg",
    title: "Robotics Test",
    description: "Robotics assessment and practical testing.",
    alt: "Students in a robotics test activity",
  },
  {
    file: "Teaching_Photos/VexIQ_Class.jpg",
    title: "VEX IQ Class",
    description: "Introductory VEX IQ robotics lesson.",
    alt: "Students in a VEX IQ class",
  },
  {
    file: "Teaching_Photos/ClubPresentation.jpg",
    title: "Club Presentation",
    description: "Student presentation during club session.",
    alt: "Students presenting in a club activity",
  },
  {
    file: "Teaching_Photos/HandOnLearning_1.jpg",
    title: "Hands-on Learning 1",
    description: "Students learning through direct practice.",
    alt: "Hands-on learning activity one",
  },
  {
    file: "Teaching_Photos/HandsOnLearning_2.jpg",
    title: "Hands-on Learning 2",
    description: "Collaborative practical classroom task.",
    alt: "Hands-on learning activity two",
  },
  {
    file: "Teaching_Photos/HandsOnLearning_Seminar.JPG",
    title: "Hands-on Seminar",
    description: "Seminar-based practical learning.",
    alt: "Hands-on learning seminar session",
  },
  {
    file: "Teaching_Photos/EnglishCamp.JPG",
    title: "English Camp",
    description: "Interactive language learning activities.",
    alt: "Students during English camp activity",
  },
  {
    file: "Teaching_Photos/MorningTalk.jpg",
    title: "Morning Talk",
    description: "Morning session with student engagement.",
    alt: "Morning talk classroom session",
  },
  {
    file: "Teaching_Photos/MorningTalk2.jpg",
    title: "Morning Talk 2",
    description: "Follow-up morning class activity.",
    alt: "Second morning talk classroom session",
  },
  {
    file: "Teaching_Photos/SchooFair.JPG",
    title: "School Fair",
    description: "Student participation in school fair.",
    alt: "Students in school fair event",
  },
  {
    file: "Teaching_Photos/Training.jpg",
    title: "Teacher Training",
    description: "Professional learning and training.",
    alt: "Teacher in training session",
  },
  {
    file: "Teaching_Photos/Training_2.jpg",
    title: "Teacher Training 2",
    description: "Advanced workshop and training activity.",
    alt: "Teacher in second training session",
  },
];

const logoItems = [
  { file: "Logos/Arduino_Logo.svg.png", alt: "Arduino" },
  { file: "Logos/LEGO_logo.svg.png", alt: "LEGO Education" },
  { file: "Logos/Microsoft_logo_(2012).svg.png", alt: "Microsoft" },
  { file: "Logos/Python-logo-notext.svg.png", alt: "Python" },
  { file: "Logos/canva.webp", alt: "Canva" },
  { file: "Logos/microbit-logo.png", alt: "Microbit" },
  { file: "Logos/scratch-coding.jpg", alt: "Scratch" },
  { file: "Logos/tinkercad.png", alt: "Tinkercad" },
  { file: "Logos/New_Logo_of_FMSLogo.png", alt: "FMSLogo" },
];

const extraLogoItems = [
  { file: "Logos/ai_logo.avif", alt: "AI Logo" },
  { file: "Logos/code-int.jpg", alt: "CodeInt Logo" },
  { file: "Logos/image.png", alt: "Image Logo" },
  { file: "Logos/mac.png", alt: "Mac Logo" },
  { file: "Logos/unnamed.jpg", alt: "Additional Logo" },
];

const highlightLogoItems = [
  { file: "Logos/mce.png", alt: "Microsoft Certified Educator", label: "MCE" },
  { file: "Logos/nbdb.jpg", alt: "National Book Development Board", label: "NBDB" },
  { file: "Digital License.png", alt: "Professional Teacher Digital License", label: "Digital License" },
];

const certificateItems = [
  {
    file: "Certificates_Files/CertificateOfPassing_LPT.jpg",
    title: "Licensed Professional Teacher",
    description: "Official LPT certificate and passing record.",
  },
  {
    file: "Certificates_Files/Cert97312228167_MCE.pdf",
    title: "Microsoft Certified Educator",
    description: "Core educator certification from Microsoft.",
  },
  {
    file: "Certificates_Files/Google_Level2.jpg",
    title: "Google Certified Educator Level 2",
    description: "Official Google for Education Level 2 educator certification.",
  },
  {
    file: "Certificates_Files/Google_Certified_Educator_Lvl1.pdf",
    title: "Google Certified Educator Level 1",
    description: "Official Google for Education Level 1 educator certification.",
  },
  {
    file: "Certificates_Files/Google_Certified_Educator_Lvl2.pdf",
    title: "Google Certified Educator Level 2 (PDF)",
    description: "Official PDF credential for Google for Education Level 2.",
  },
  {
    file: "Certificates_Files/Buray, Samuel Jr., P..pdf",
    title: "APCoRE Membership Certificate 2026",
    description: "Professional membership certificate with the Asia-Pacific Consortium of Researchers and Educators, valid 2026-2029.",
  },
  {
    file: "Certificates_Files/Gemini_Certified_Educator.pdf",
    title: "Gemini Certified Educator",
    description: "Professional certification for classroom use of Google Gemini tools.",
  },
  {
    file: "Certificates_Files/Certificate_for_Introduction_to_Technology_for_Teaching_and_Learning_(March_2026)-CA_154437.pdf",
    title: "Introduction to Technology for Teaching and Learning",
    description: "Professional learning certificate for technology-supported teaching and learning practice.",
  },
  {
    file: "Certificates_Files/Certificate_for_Practical_Home_Behavior_Management_for_Children_with_Special_Needs_(February_2026)-CA_146624.pdf",
    title: "Practical Home Behavior Management",
    description: "Professional learning certificate for supporting children with special needs through practical behavior management strategies.",
  },
  {
    file: "Certificates_Files/education-2030 UNESCO-06 Certificate _ UNESCO Open Learning.pdf",
    title: "UNESCO Open Learning Certificate",
    description: "Education 2030 professional learning certificate from UNESCO.",
  },
  {
    file: "Certificates_Files/Unesco_2026.pdf",
    title: "UNESCO Certificate 2026",
    description: "UNESCO professional learning and training certificate (2026).",
  },
  {
    file: "Certificates_Files/Robotics_VexIQ_Certificate.pdf",
    title: "VEX IQ Robotics Certificate",
    description: "Robotics training and classroom application certification.",
  },
  {
    file: "Certificates_Files/Canva_Certificates.pdf",
    title: "Canva Certificates",
    description: "Design and classroom communication certificate set.",
  },
  {
    file: "Certificates_Files/Certificate_of_Completion_DIGITAL_LITERACY 2.pdf",
    title: "Digital Literacy Completion",
    description: "Completed digital literacy professional course.",
  },
  {
    file: "Certificates_Files/Digital Literacy Content.pdf",
    title: "Digital Literacy Content",
    description: "Learning content and evidence for digital literacy training.",
  },
  {
    file: "Certificates_Files/ECE_CANADA_LEVEL 1_Certificate.pdf",
    title: "ECE Canada Level 1",
    description: "Early childhood education certification.",
  },
  {
    file: "Certificates_Files/TEFL.pdf",
    title: "TEFL Certificate",
    description: "Teaching English as a Foreign Language credential.",
  },
  {
    file: "Certificates_Files/TEYL.pdf",
    title: "TEYL Certificate",
    description: "Teaching English to Young Learners credential.",
  },
  {
    file: "Certificates_Files/Empowering the New Generation of Teachers.jpg",
    title: "Empowering the New Generation of Teachers",
    description: "Professional development certificate for modern teaching practice.",
  },
  {
    file: "Certificates_Files/Kasetsart_Training.jpg",
    title: "Kasetsart Training",
    description: "Training completion at Kasetsart University program.",
  },
  {
    file: "Certificates_Files/MCE_Score.pdf",
    title: "Microsoft Educator Score Report",
    description: "Supporting score report for Microsoft educator certification.",
  },
  {
    file: "Certificates_Files/NC2.jpg",
    title: "NC2 Certificate",
    description: "National Certificate credential record.",
  },
  {
    file: "Certificates_Files/NDBD.JPEG",
    title: "NDBD Recognition",
    description: "National-level design and educational credential recognition.",
  },
];

const transcriptItems = [
  {
    file: "https://learn.microsoft.com/en-us/users/samuelburay/transcript/d82x9a24nrgjr4k?tab=credentials-tab",
    title: "Microsoft Learn Transcript",
    description: "Official Microsoft Learn credentials and transcript profile.",
  },
  {
    file: "Transcripts/BEED_Apostille.pdf",
    title: "BEED Apostille",
    description: "Bachelor of Elementary Education credential document.",
  },
  {
    file: "Transcripts/BSIT_Apostille.pdf",
    title: "BSIT Apostille",
    description: "Bachelor of Science in Information Technology credential document.",
  },
  {
    file: "Transcripts/MEM_Credentials.pdf",
    title: "MEM Credentials",
    description: "Master of Education in Educational Management credentials.",
  },
];

const contentManagerEvidenceItems = [
  {
    file: "Content Manager Portfolio/Camp Posters/1.png",
    preview: "Content Manager Portfolio/Camp Posters/1.png",
    typeLabel: "WEB",
    title: "Classes and Camps Website Content",
    description: "Saved booking-page evidence for organizing classes, camps, parties, services, and parent-facing program information.",
    buttonLabel: "Preview Page",
    previewOnly: true,
    hideFullFile: true,
  },
  {
    file: "Content Manager Portfolio/Birthday_Planner_guide.png",
    title: "Birthday Planning Guide",
    description: "A parent-friendly guide that explains timing, support, house rules, food setup, and contact steps.",
    isTall: true,
  },
  {
    file: "Content Manager Portfolio/Automation_Release_of_Liability_and_Indemnity Agreement.png",
    title: "Enrollment Automation Workflow",
    description: "A visual explanation of registration, email delivery, form completion, record keeping, and parent follow-up.",
    isTall: true,
  },
  {
    file: "Content Manager Portfolio/GoogleWorspaceTraining_ScreenShot.jpeg",
    title: "Google Workspace Training",
    description: "Team training evidence for improving shared documents, communication routines, and digital collaboration.",
  },
  {
    file: "Content Manager Portfolio/10.jpg",
    preview: "Content Manager Portfolio/10.jpg",
    typeLabel: "PDF",
    title: "Student Progress Reporting System",
    description: "A system-components PDF for explaining school reporting structure, performance data, and workflow planning.",
    previewOnly: true,
    hideFullFile: true,
  },
  {
    file: "assets/pdf-previews/The Village Alliance Mail - \u{1F389} Your Tuesday Yoga at VKC is Coming Up!.pdf.png",
    preview: "assets/pdf-previews/The Village Alliance Mail - \u{1F389} Your Tuesday Yoga at VKC is Coming Up!.pdf.png",
    typeLabel: "PDF",
    title: "Email Campaign Example",
    description: "A campaign email PDF showing audience communication, reminder structure, and brand-consistent parent messaging.",
    previewOnly: true,
    hideFullFile: true,
    isTall: true,
  },
];

const contentManagerVideoItems = [
  {
    file: "Content Manager Portfolio/Spring_Spectacular_Camp.mp4",
    title: "Spring Spectacular Camp",
    description: "Full campaign video for Spring Spectacular Camp program promotion.",
    layout: "standard",
  },
  {
    file: "Content Manager Portfolio/VKC_SpringSpectacularCamp_Instagram.mp4",
    title: "Spring Spectacular Camp Instagram",
    description: "Portrait-format Instagram campaign version for Spring Spectacular Camp.",
    layout: "portrait",
  },
  {
    file: "Content Manager Portfolio/Alameda Video Teaser.mp4",
    title: "Alameda Video Teaser",
    description: "Community-facing teaser video for local family awareness.",
  },
  {
    file: "Content Manager Portfolio/Afterschool_Teaser.mp4",
    title: "Afterschool Teaser",
    description: "Portrait-format promotional video for afterschool program discovery.",
    layout: "portrait",
  },
  {
    file: "Content Manager Portfolio/services_video.mp4",
    title: "Services Video",
    description: "Overview video presenting available services in a clear promotional flow.",
  },
  {
    file: "Content Manager Portfolio/Junior Chef Academy .mp4",
    title: "Junior Chef Academy",
    description: "Program video for a hands-on cooking and creative learning experience.",
  },
  {
    file: "Content Manager Portfolio/Space_Robots_Laser_Camp.mp4",
    title: "Space Robots Laser Camp",
    description: "Camp campaign video for robotics, space, and maker-learning themes.",
  },
  {
    file: "Content Manager Portfolio/Thrill Builders Camp.mp4",
    title: "Thrill Builders Camp",
    description: "Camp video for roller coaster engineering and build-based learning.",
  },
  {
    file: "Content Manager Portfolio/TheArcOfLearning.mp4",
    title: "The Arc of Learning",
    description: "Portrait-format learning story video for social media promotion.",
    layout: "portrait",
  },
  {
    file: "Content Manager Portfolio/Instgram_Post.mp4",
    title: "Instagram Post",
    description: "Short social post formatted for feed-first campaign use.",
    layout: "portrait",
  },
  {
    file: "Content Manager Portfolio/Summer Lunch Party.mp4",
    title: "Summer Lunch Party",
    description: "Event clip for lightweight social engagement and parent updates.",
  },
  {
    file: "Content Manager Portfolio/Best in Alameda!.mp4",
    title: "Best in Alameda",
    description: "Wide promotional banner video for quick community recognition.",
    layout: "wide",
  },
];

const contentManagerPosterItems = Array.from({ length: 16 }, (_, index) => ({
  file: `Content Manager Portfolio/Camp Posters/${index + 1}.png`,
  title: `Camp Poster ${String(index + 1).padStart(2, "0")}`,
  description: "Square campaign poster for a themed learning camp.",
}));

const contentManagerWorkSampleItems = [
  {
    file: "Content Manager Portfolio/3.jpg",
    title: "Camp-Based Learning Programs",
    description: "Workbook and course creation for structured, age-appropriate camp learning.",
  },
  {
    file: "Content Manager Portfolio/4.jpg",
    title: "Workbook and Course Samples",
    description: "A sample set of phonics, grammar, and completion-certificate materials.",
  },
  {
    file: "Content Manager Portfolio/5.jpg",
    title: "Creative Design Work",
    description: "Covers, badges, activity pages, social graphics, and teaser presentations.",
  },
  {
    file: "Content Manager Portfolio/6.jpg",
    title: "Camp and Junior Chef Assets",
    description: "Visual samples for camp themes, world exploration, and cooking programs.",
  },
  {
    file: "Content Manager Portfolio/7.jpg",
    title: "Reading Adventure Promo",
    description: "Promotional visual for connecting reading content with local adventure themes.",
  },
  {
    file: "Content Manager Portfolio/8.jpg",
    title: "Reading Social Campaign",
    description: "Mobile-first social examples for reading engagement and book promotion.",
  },
  {
    file: "Content Manager Portfolio/9.jpg",
    title: "Google Sheets and Data Work",
    description: "Data-driven tools for tracking, dashboards, charts, and simple reporting.",
  },
  {
    file: "Content Manager Portfolio/10.jpg",
    title: "Progress Dashboard Samples",
    description: "Graphical student progress and performance dashboard examples.",
  },
  {
    file: "Content Manager Portfolio/11.jpg",
    title: "Flip Books and E-Books",
    description: "Interactive digital book concepts that guide families and learners.",
  },
  {
    file: "Content Manager Portfolio/12.jpg",
    title: "Book and Worksheet Projects",
    description: "Book, nursery, computing, and writing-studio samples for learning products.",
  },
];

const operationsApplicationLogoItems = [
  {
    file: "Operations Application Logo/Gemini.png",
    title: "Gemini",
    description: "AI-assisted planning, ideation, and content support.",
  },
  {
    file: "Operations Application Logo/chatgpt.jpg",
    title: "ChatGPT",
    description: "Drafting, content refinement, workflow support, and lesson ideation.",
  },
  {
    file: "Operations Application Logo/codex.png",
    title: "Codex",
    description: "Website updates, code organization, and technical implementation support.",
  },
  {
    file: "Operations Application Logo/google workspace.jpg",
    title: "Google Workspace",
    description: "Team documents, spreadsheets, shared files, and collaborative operations.",
  },
  {
    file: "Operations Application Logo/adobe-express-logo-app-icon-editable-transparent-background-social-media-design-for-digital-download-free-png.webp",
    title: "Adobe Express",
    description: "Fast visual design for posters, guides, and campaign assets.",
  },
  {
    file: "Operations Application Logo/wix.png",
    title: "Wix",
    description: "Website pages, service listings, forms, and booking content updates.",
  },
  {
    file: "Operations Application Logo/meta.png",
    title: "Meta",
    description: "Social media presence, community updates, and campaign distribution.",
  },
  {
    file: "Operations Application Logo/omnisend.webp",
    title: "Omnisend",
    description: "Email campaign delivery, reminders, and parent communication flows.",
  },
  {
    file: "Operations Application Logo/hubspot8920.jpg",
    title: "HubSpot",
    description: "Contact organization, CRM routines, and communication tracking.",
  },
  {
    file: "Operations Application Logo/sling.png",
    title: "Sling",
    description: "Scheduling and team operations support.",
  },
  {
    file: "Operations Application Logo/wave.png",
    title: "Wave",
    description: "Invoices, payments, and basic accounting support.",
  },
];

const visitorsAnalyticsConfig = {
  // 1) Create GA4 property and copy Measurement ID (format: G-XXXXXXXXXX).
  gaMeasurementId: "G-QRQJVRGK5M",
  // 2) Add your GA report/share URL here. This URL requires your Google login.
  gaDashboardUrl: "https://analytics.google.com/analytics/web/",
  // 3) Set your deployed portfolio URL (optional). If empty, current site URL is used.
  liveSiteUrl: "https://samuelburay2022-pixel.github.io/TwellPortfolio/",
  // 4) Set GA4 Property ID (numeric, e.g., 123456789) for analytics-summary.html API queries.
  gaPropertyId: "527769702",
  // 5) Set Google OAuth Web Client ID for Analytics Data API read access.
  gaOAuthClientId: "182752428348-4kqf7ejk69tlq89ciq5t5eot6agfsnpv.apps.googleusercontent.com",
  // 6) Summary page opened after owner login.
  analyticsSummaryPage: "analytics-summary.html",
  // 7) Simple owner access gate for this page section.
  ownerUsername: "twellth91",
  ownerPassword: "twellth91*",
};

const philosophySlides = [
  {
    step: "Core Belief",
    title: "Student-Centered Learning",
    text: "Every learner can grow with guidance, voice, and meaningful learning experiences in a safe and inclusive classroom.",
  },
  {
    step: "Pillar 1",
    title: "Meaningful Learning",
    text: "Learning is purposeful, engaging, and aligned with student needs, strengths, and real classroom contexts.",
  },
  {
    step: "Pillar 2",
    title: "Inquiry and Project-Based Learning",
    text: "Students explore questions, solve real-world problems, and develop independence through active participation.",
  },
  {
    step: "Pillar 3",
    title: "Purposeful Technology",
    text: "Technology is used for creation, collaboration, and innovation with responsible digital citizenship practice.",
  },
  {
    step: "Pillar 4",
    title: "Inclusive and Supportive Classrooms",
    text: "Diverse learning needs, cultures, and perspectives are respected in a safe and positive environment.",
  },
  {
    step: "Pillar 5",
    title: "Reflective Teaching Practice",
    text: "Continuous reflection, learning, and adaptation keep teaching relevant, engaging, and impactful.",
  },
  {
    step: "Outcome",
    title: "Future-Ready Learners",
    text: "The goal is to nurture curious, collaborative, and confident learners ready to shape their own futures.",
  },
];

const imageExtensions = [".jpg", ".jpeg", ".png", ".webp", ".gif", ".heic", ".avif"];

function isExternalUrl(path) {
  return /^https?:\/\//i.test(path);
}

function toPublicUrl(path) {
  if (isExternalUrl(path)) {
    return path;
  }
  return encodeURI(path);
}

function isImageFile(path) {
  if (isExternalUrl(path)) {
    return false;
  }
  const normalized = path.toLowerCase().split("?")[0];
  return imageExtensions.some((extension) => normalized.endsWith(extension));
}

function isPdfFile(path) {
  const normalized = path.toLowerCase().split("?")[0];
  return normalized.endsWith(".pdf");
}

function fileExtension(path) {
  if (isExternalUrl(path)) {
    return "WEB";
  }
  const cleanPath = path.split("?")[0];
  const lastDot = cleanPath.lastIndexOf(".");
  if (lastDot === -1) {
    return "FILE";
  }
  return cleanPath.slice(lastDot + 1).toUpperCase();
}

function videoMimeType(path) {
  const extension = fileExtension(path).toLowerCase();
  if (extension === "mov") {
    return "video/quicktime";
  }
  if (extension === "webm") {
    return "video/webm";
  }
  return "video/mp4";
}

function fileName(path) {
  const cleanPath = path.split("?")[0];
  const parts = cleanPath.split("/");
  return parts[parts.length - 1] || "";
}

function defaultPdfPreview(path) {
  if (isExternalUrl(path)) {
    return "";
  }
  const cleanPath = path.split("?")[0];
  if (!isPdfFile(cleanPath)) {
    return "";
  }
  return `assets/pdf-previews/${fileName(cleanPath)}.png`;
}

function toPdfViewerUrl(path) {
  const baseUrl = toPublicUrl(path);
  const hashJoiner = baseUrl.includes("#") ? "&" : "#";
  return `${baseUrl}${hashJoiner}toolbar=0&navpanes=0&scrollbar=1&view=FitH`;
}

function renderTeachingPhotos() {
  const container = document.getElementById("teaching-photo-grid");
  if (!container) {
    return;
  }

  container.innerHTML = "";

  if (!teachingPhotos.length) {
    const emptyCard = document.createElement("article");
    emptyCard.className = "photo-card";
    emptyCard.setAttribute("data-reveal", "");
    emptyCard.innerHTML =
      '<div class="photo-meta"><h3>No photos yet</h3><p>Add entries in <code>teachingPhotos</code> inside <code>main.js</code>.</p></div>';
    container.appendChild(emptyCard);
    return;
  }

  teachingPhotos.forEach((item) => {
    const figure = document.createElement("figure");
    figure.className = "photo-card";
    figure.setAttribute("data-reveal", "");

    const image = document.createElement("img");
    image.src = toPublicUrl(item.file);
    image.alt = item.alt || item.title || "Teaching photo";
    image.loading = "lazy";

    const caption = document.createElement("figcaption");
    caption.className = "photo-meta";

    const title = document.createElement("h3");
    title.textContent = item.title || "Untitled Photo";

    const description = document.createElement("p");
    description.textContent = item.description || "Add a short description in main.js.";

    caption.appendChild(title);
    caption.appendChild(description);

    figure.appendChild(image);
    figure.appendChild(caption);
    container.appendChild(figure);
  });
}

function renderLogos() {
  const featuredContainer = document.getElementById("logo-grid");
  const extraContainer = document.getElementById("logo-extra-row");
  const highlightContainer = document.getElementById("highlight-logo-grid");

  if (!featuredContainer) {
    return;
  }

  featuredContainer.innerHTML = "";
  if (extraContainer) {
    extraContainer.innerHTML = "";
  }
  if (highlightContainer) {
    highlightContainer.innerHTML = "";
  }

  if (extraContainer) {
    extraLogoItems.forEach((item) => {
      const tile = document.createElement("div");
      tile.className = "logo-tile";

      const image = document.createElement("img");
      image.src = toPublicUrl(item.file);
      image.alt = item.alt || "Logo";
      image.loading = "lazy";

      tile.appendChild(image);
      extraContainer.appendChild(tile);
    });
  }

  logoItems.forEach((item) => {
    const tile = document.createElement("div");
    tile.className = "logo-tile";

    const image = document.createElement("img");
    image.src = toPublicUrl(item.file);
    image.alt = item.alt || "Logo";
    image.loading = "lazy";

    tile.appendChild(image);
    featuredContainer.appendChild(tile);
  });

  if (highlightContainer) {
    highlightLogoItems.forEach((item) => {
      const card = document.createElement("div");
      card.className = "highlight-logo-card";

      const image = document.createElement("img");
      image.src = toPublicUrl(item.file);
      image.alt = item.alt || item.label || "Highlighted logo";
      image.loading = "lazy";

      const label = document.createElement("span");
      label.textContent = item.label || "Credential";

      card.appendChild(image);
      card.appendChild(label);
      highlightContainer.appendChild(card);
    });
  }
}

function renderDocumentCards(containerId, items, emptyLabel) {
  const container = document.getElementById(containerId);
  if (!container) {
    return;
  }

  container.innerHTML = "";

  if (!items.length) {
    const emptyCard = document.createElement("article");
    emptyCard.className = "certificate-card";
    emptyCard.setAttribute("data-reveal", "");
    emptyCard.innerHTML =
      `<div class="certificate-body"><h3>No ${emptyLabel} yet</h3><p>Add entries in <code>main.js</code>.</p></div>`;
    container.appendChild(emptyCard);
    return;
  }

  items.forEach((item) => {
    const card = document.createElement("article");
    card.className = "certificate-card";
    card.setAttribute("data-reveal", "");

    const preview = document.createElement("div");
    preview.className = "certificate-preview";

    const typeBadge = document.createElement("span");
    typeBadge.className = "certificate-file-type";
    typeBadge.textContent = fileExtension(item.file);
    preview.appendChild(typeBadge);

    const previewPath = item.preview || defaultPdfPreview(item.file);

    if (isImageFile(item.file)) {
      const image = document.createElement("img");
      image.src = toPublicUrl(item.file);
      image.alt = item.title || "Certificate preview";
      image.loading = "lazy";
      preview.appendChild(image);
    } else if (previewPath) {
      const image = document.createElement("img");
      image.src = toPublicUrl(previewPath);
      image.alt = `${item.title || "Document"} preview`;
      image.loading = "lazy";
      image.addEventListener("error", () => {
        image.remove();
        const placeholder = document.createElement("div");
        placeholder.className = "certificate-placeholder";
        placeholder.textContent = fileExtension(item.file);
        preview.appendChild(placeholder);
      });
      preview.appendChild(image);
    } else {
      const placeholder = document.createElement("div");
      placeholder.className = "certificate-placeholder";
      placeholder.textContent = fileExtension(item.file);
      preview.appendChild(placeholder);
    }

    const body = document.createElement("div");
    body.className = "certificate-body";

    const title = document.createElement("h3");
    title.textContent = item.title || "Untitled Certificate";

    const description = document.createElement("p");
    description.textContent = item.description || "Add a short description in main.js.";

    const link = document.createElement("button");
    link.type = "button";
    link.className = "certificate-link";
    link.textContent = "View File";
    link.addEventListener("click", () => {
      openDocumentPreview(item);
    });

    body.appendChild(title);
    body.appendChild(description);
    body.appendChild(link);

    card.appendChild(preview);
    card.appendChild(body);
    container.appendChild(card);
  });
}

function createContentManagerPreview(item) {
  const preview = document.createElement("div");
  preview.className = "content-manager-evidence-preview";

  const typeBadge = document.createElement("span");
  typeBadge.className = "content-manager-file-type";
  typeBadge.textContent = item.typeLabel || fileExtension(item.file);
  preview.appendChild(typeBadge);

  const previewPath = item.preview || (isImageFile(item.file) ? item.file : "");

  if (previewPath) {
    const image = document.createElement("img");
    image.src = toPublicUrl(previewPath);
    image.alt = `${item.title || "Content manager work"} preview`;
    image.loading = "lazy";
    if (item.isTall) {
      image.className = "content-manager-preview-tall";
    }
    image.addEventListener("error", () => {
      image.remove();
      const placeholder = document.createElement("div");
      placeholder.className = "content-manager-evidence-placeholder";
      placeholder.textContent = item.typeLabel || fileExtension(item.file);
      preview.appendChild(placeholder);
    });
    preview.appendChild(image);
  } else {
    const placeholder = document.createElement("div");
    placeholder.className = "content-manager-evidence-placeholder";
    placeholder.textContent = item.typeLabel || fileExtension(item.file);
    preview.appendChild(placeholder);
  }

  return preview;
}

function renderContentManagerEvidence() {
  const container = document.getElementById("content-manager-evidence-grid");
  if (!container) {
    return;
  }

  container.innerHTML = "";

  contentManagerEvidenceItems.forEach((item) => {
    const card = document.createElement("article");
    card.className = "content-manager-evidence-card";
    card.setAttribute("data-reveal", "");

    const body = document.createElement("div");
    body.className = "content-manager-evidence-body";

    const title = document.createElement("h3");
    title.textContent = item.title || "Content Manager Work";

    const description = document.createElement("p");
    description.textContent = item.description || "Selected content management evidence.";

    body.appendChild(title);
    body.appendChild(description);

    if (item.file) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "content-manager-evidence-link";
      button.textContent = item.buttonLabel || "Preview Work";
      button.addEventListener("click", () => {
        openDocumentPreview(item);
      });
      body.appendChild(button);
    }

    card.appendChild(createContentManagerPreview(item));
    card.appendChild(body);
    container.appendChild(card);
  });
}

function renderContentManagerVideos() {
  const container = document.getElementById("content-manager-video-grid");
  if (!container) {
    return;
  }

  container.innerHTML = "";

  contentManagerVideoItems.forEach((item) => {
    const card = document.createElement("article");
    card.className = "content-manager-video-card";
    card.setAttribute("data-reveal", "");
    if (item.layout === "portrait") {
      card.classList.add("is-vertical");
    }
    if (item.layout === "wide") {
      card.classList.add("is-wide");
    }
    if (item.layout === "standard") {
      card.classList.add("is-standard");
    }

    const video = document.createElement("video");
    video.controls = true;
    video.preload = "none";
    video.playsInline = true;
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "true");
    video.setAttribute("aria-label", item.title || "Content manager video");

    const source = document.createElement("source");
    source.src = toPublicUrl(item.file);
    source.type = videoMimeType(item.file);
    video.appendChild(source);

    const body = document.createElement("div");
    body.className = "content-manager-video-meta";

    const title = document.createElement("h3");
    title.textContent = item.title || "Video Campaign";

    const description = document.createElement("p");
    description.textContent = item.description || "Short-form content campaign video.";

    body.appendChild(title);
    body.appendChild(description);

    card.appendChild(video);
    card.appendChild(body);
    container.appendChild(card);
  });
}

function renderContentManagerPosters() {
  const container = document.getElementById("content-manager-poster-grid");
  if (!container) {
    return;
  }

  container.innerHTML = "";

  contentManagerPosterItems.forEach((item) => {
    const figure = document.createElement("figure");
    figure.className = "content-manager-poster-card";
    figure.setAttribute("data-reveal", "");

    const image = document.createElement("img");
    image.src = toPublicUrl(item.file);
    image.alt = item.title || "Camp poster";
    image.loading = "lazy";

    const caption = document.createElement("figcaption");
    const title = document.createElement("h3");
    title.textContent = item.title || "Camp Poster";
    const description = document.createElement("p");
    description.textContent = item.description || "Themed camp campaign poster.";

    caption.appendChild(title);
    caption.appendChild(description);
    figure.appendChild(image);
    figure.appendChild(caption);
    container.appendChild(figure);
  });
}

function renderContentManagerWorkSamples() {
  const container = document.getElementById("content-manager-work-grid");
  if (!container) {
    return;
  }

  container.innerHTML = "";

  contentManagerWorkSampleItems.forEach((item) => {
    const figure = document.createElement("figure");
    figure.className = "content-manager-work-card";
    figure.setAttribute("data-reveal", "");

    const image = document.createElement("img");
    image.src = toPublicUrl(item.file);
    image.alt = item.title || "Content manager work sample";
    image.loading = "lazy";

    const caption = document.createElement("figcaption");
    const title = document.createElement("h3");
    title.textContent = item.title || "Work Sample";
    const description = document.createElement("p");
    description.textContent = item.description || "Selected content management work sample.";

    caption.appendChild(title);
    caption.appendChild(description);
    figure.appendChild(image);
    figure.appendChild(caption);
    container.appendChild(figure);
  });
}

function initializeContentManagerToggles() {
  const toggleButtons = Array.from(document.querySelectorAll("[data-content-manager-toggle]"));
  if (!toggleButtons.length) {
    return;
  }

  const setPanelState = (button, shouldOpen, shouldScroll = false) => {
    const panelId = button.getAttribute("aria-controls");
    const panel = panelId ? document.getElementById(panelId) : null;
    if (!panel) {
      return;
    }

    if (shouldOpen) {
      toggleButtons.forEach((otherButton) => {
        if (otherButton !== button) {
          setPanelState(otherButton, false);
        }
      });
    }

    const block = button.closest(".content-manager-block");
    panel.hidden = !shouldOpen;
    button.setAttribute("aria-expanded", String(shouldOpen));
    button.textContent = shouldOpen
      ? button.dataset.closeLabel || "Hide"
      : button.dataset.openLabel || "Open";

    if (block) {
      block.classList.toggle("is-open", shouldOpen);
    }

    if (!shouldOpen) {
      panel.querySelectorAll("video").forEach((video) => {
        video.pause();
      });
      return;
    }

    panel.querySelectorAll("[data-reveal]").forEach((element) => {
      element.classList.add("is-visible");
    });

    if (shouldScroll && block) {
      block.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  toggleButtons.forEach((button) => {
    setPanelState(button, button.getAttribute("aria-expanded") === "true");
    button.addEventListener("click", () => {
      setPanelState(button, button.getAttribute("aria-expanded") !== "true");
    });
  });

  document.querySelectorAll("[data-content-manager-open]").forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      const panelId = trigger.dataset.contentManagerOpen;
      const button = toggleButtons.find((item) => item.getAttribute("aria-controls") === panelId);
      if (button) {
        setPanelState(button, true, true);
      }
    });
  });

  const initialPanelId = window.location.hash ? window.location.hash.slice(1) : "";
  if (initialPanelId) {
    const button = toggleButtons.find((item) => item.getAttribute("aria-controls") === initialPanelId);
    if (button) {
      setPanelState(button, true);
    }
  }
}

function renderOperationsApplicationLogos() {
  const container = document.getElementById("operations-logo-grid");
  if (!container) {
    return;
  }

  container.innerHTML = "";

  operationsApplicationLogoItems.forEach((item) => {
    const card = document.createElement("article");
    card.className = "operations-logo-card";
    card.setAttribute("data-reveal", "");

    const logoWrap = document.createElement("div");
    logoWrap.className = "operations-logo-visual";

    const image = document.createElement("img");
    image.src = toPublicUrl(item.file);
    image.alt = `${item.title || "Operations application"} logo`;
    image.loading = "lazy";
    logoWrap.appendChild(image);

    const body = document.createElement("div");
    body.className = "operations-logo-body";

    const title = document.createElement("h3");
    title.textContent = item.title || "Operations Application";

    const description = document.createElement("p");
    description.textContent = item.description || "Application used for educational operations.";

    body.appendChild(title);
    body.appendChild(description);
    card.appendChild(logoWrap);
    card.appendChild(body);
    container.appendChild(card);
  });
}

function openDocumentPreview(item) {
  document.dispatchEvent(
    new CustomEvent("portfolio:open-document", {
      detail: item,
    })
  );
}

function initializeDocumentViewer() {
  const viewer = document.getElementById("doc-viewer");
  const backdrop = document.getElementById("doc-viewer-backdrop");
  const closeButton = document.getElementById("doc-viewer-close");
  const title = document.getElementById("doc-viewer-title");
  const content = document.getElementById("doc-viewer-content");

  if (!viewer || !backdrop || !closeButton || !title || !content) {
    return;
  }

  const closeViewer = () => {
    viewer.classList.remove("is-open");
    viewer.setAttribute("aria-hidden", "true");
    document.body.classList.remove("doc-viewer-open");
    content.innerHTML = "";
  };

  const openViewer = (item) => {
    if (!item || !item.file) {
      return;
    }

    const fileUrl = toPublicUrl(item.file);
    const externalWebPage = isExternalUrl(item.file) && !isPdfFile(item.file) && !isImageFile(item.file);

    if (externalWebPage) {
      window.open(fileUrl, "_blank", "noopener");
      return;
    }

    title.textContent = item.title || "Document Preview";
    content.innerHTML = "";

    const previewPath = item.viewerPreview || item.preview || defaultPdfPreview(item.file);
    const hasPreviewPath = Boolean(previewPath);
    const shouldUsePreview = item.previewOnly && hasPreviewPath;

    if (shouldUsePreview) {
      const previewPanel = document.createElement("div");
      previewPanel.className = "doc-viewer-preview-panel";

      const image = document.createElement("img");
      image.className = "doc-viewer-image doc-viewer-preview-image";
      image.src = toPublicUrl(previewPath);
      image.alt = `${item.title || "Document"} preview`;
      image.loading = "lazy";
      image.draggable = false;
      image.addEventListener("error", () => {
        image.remove();
        const placeholder = document.createElement("div");
        placeholder.className = "certificate-placeholder";
        placeholder.textContent = item.typeLabel || fileExtension(item.file);
        previewPanel.prepend(placeholder);
      });

      previewPanel.appendChild(image);
      if (!item.hideFullFile) {
        const fallback = document.createElement("a");
        fallback.className = "doc-viewer-fallback-link";
        fallback.href = fileUrl;
        fallback.target = "_blank";
        fallback.rel = "noopener";
        fallback.textContent = "Open full file in new tab";
        previewPanel.appendChild(fallback);
      }
      content.appendChild(previewPanel);
    } else if (isPdfFile(item.file)) {
      const frame = document.createElement("iframe");
      frame.className = "doc-viewer-frame";
      frame.src = toPdfViewerUrl(item.file);
      frame.title = `${item.title || "Document"} PDF preview`;
      frame.loading = "lazy";
      content.appendChild(frame);
    } else if (isImageFile(item.file)) {
      const image = document.createElement("img");
      image.className = "doc-viewer-image";
      image.src = fileUrl;
      image.alt = item.title || "Document image preview";
      image.loading = "lazy";
      image.draggable = false;
      content.appendChild(image);
    } else {
      const fallback = document.createElement("a");
      fallback.className = "doc-viewer-fallback-link";
      fallback.href = fileUrl;
      fallback.target = "_blank";
      fallback.rel = "noopener";
      fallback.textContent = "Open in new tab";
      content.appendChild(fallback);
    }

    viewer.classList.add("is-open");
    viewer.setAttribute("aria-hidden", "false");
    document.body.classList.add("doc-viewer-open");
  };

  document.addEventListener("portfolio:open-document", (event) => {
    openViewer(event.detail);
  });

  closeButton.addEventListener("click", closeViewer);
  backdrop.addEventListener("click", closeViewer);

  content.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });

  content.addEventListener("dragstart", (event) => {
    if (event.target && event.target.tagName === "IMG") {
      event.preventDefault();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && viewer.classList.contains("is-open")) {
      closeViewer();
    }
  });
}

function initializeOwnerLoginPopup() {
  const trigger = document.getElementById("owner-login-trigger");
  const modal = document.getElementById("owner-login-modal");
  const backdrop = document.getElementById("owner-login-backdrop");
  const closeButton = document.getElementById("owner-login-close");
  const status = document.getElementById("owner-login-status");
  const form = document.getElementById("owner-login-form");
  const usernameInput = document.getElementById("owner-login-username");
  const passwordInput = document.getElementById("owner-login-password");
  const submitButton = document.getElementById("owner-login-submit");
  const message = document.getElementById("owner-login-message");

  if (
    !trigger ||
    !modal ||
    !backdrop ||
    !closeButton ||
    !status ||
    !form ||
    !usernameInput ||
    !passwordInput ||
    !submitButton ||
    !message
  ) {
    return;
  }

  const measurementId = visitorsAnalyticsConfig.gaMeasurementId.trim();
  const dashboardUrl = visitorsAnalyticsConfig.gaDashboardUrl.trim();
  const liveSiteUrl = (visitorsAnalyticsConfig.liveSiteUrl || "").trim();
  const propertyId = (visitorsAnalyticsConfig.gaPropertyId || "").trim();
  const oauthClientId = (visitorsAnalyticsConfig.gaOAuthClientId || "").trim();
  const analyticsSummaryPage = (visitorsAnalyticsConfig.analyticsSummaryPage || "analytics-summary.html").trim();
  const ownerUsername = visitorsAnalyticsConfig.ownerUsername.trim();
  const ownerPassword = visitorsAnalyticsConfig.ownerPassword || "";

  const loadGoogleAnalytics = (id) => {
    if (!id || window.gtag) {
      return;
    }

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };

    window.gtag("js", new Date());
    window.gtag("config", id, {
      anonymize_ip: true,
    });
  };

  const setMessage = (text, tone = "") => {
    message.textContent = text;
    message.classList.remove("is-error", "is-success");
    if (tone) {
      message.classList.add(`is-${tone}`);
    }
  };

  const openModal = () => {
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("owner-login-open");
  };

  const closeModal = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("owner-login-open");
    form.reset();
    setMessage("");
  };

  if (measurementId) {
    loadGoogleAnalytics(measurementId);
  }

  if (!ownerUsername || !ownerPassword) {
    status.textContent = "Set ownerUsername and ownerPassword in main.js.";
    submitButton.disabled = true;
    setMessage("Owner login details are not configured yet.", "error");
  } else {
    status.textContent = "Enter your Admin/Owner login details.";
    submitButton.disabled = false;
    if (!propertyId || !oauthClientId) {
      setMessage("Add gaPropertyId and gaOAuthClientId in main.js to load charts in Analytics Summary.");
    }
  }

  trigger.addEventListener("click", openModal);
  closeButton.addEventListener("click", closeModal);
  backdrop.addEventListener("click", closeModal);

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!ownerUsername || !ownerPassword) {
      return;
    }

    const enteredUsername = usernameInput.value.trim();
    const enteredPassword = passwordInput.value;
    const validLogin = enteredUsername === ownerUsername && enteredPassword === ownerPassword;

    if (!validLogin) {
      setMessage("Invalid login details.", "error");
      return;
    }

    const summaryUrl = new URL(analyticsSummaryPage || "analytics-summary.html", window.location.href);
    if (dashboardUrl) {
      summaryUrl.searchParams.set("dashboard", dashboardUrl);
    }
    const resolvedLiveSiteUrl = liveSiteUrl || new URL("index.html", window.location.href).toString();
    if (resolvedLiveSiteUrl) {
      summaryUrl.searchParams.set("liveSite", resolvedLiveSiteUrl);
    }
    if (measurementId) {
      summaryUrl.searchParams.set("measurementId", measurementId);
    }
    if (propertyId) {
      summaryUrl.searchParams.set("propertyId", propertyId);
    }
    if (oauthClientId) {
      summaryUrl.searchParams.set("oauthClientId", oauthClientId);
    }

    setMessage("Login successful. Opening analytics summary...", "success");
    window.open(summaryUrl.toString(), "_blank", "noopener");
    passwordInput.value = "";
    setTimeout(() => {
      closeModal();
    }, 280);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });
}

function initializePhilosophyPresentation() {
  const screen = document.getElementById("philosophy-presentation-screen");
  const stepElement = document.getElementById("philosophy-slide-step");
  const titleElement = document.getElementById("philosophy-slide-title");
  const textElement = document.getElementById("philosophy-slide-text");
  const countElement = document.getElementById("philosophy-slide-count");
  const dotsContainer = document.getElementById("philosophy-slide-dots");
  const progressBar = document.getElementById("philosophy-progress-bar");
  const container = document.querySelector(".philosophy-presentation");

  if (
    !screen ||
    !stepElement ||
    !titleElement ||
    !textElement ||
    !countElement ||
    !dotsContainer ||
    !progressBar ||
    !container
  ) {
    return;
  }

  const prefersReducedMotion =
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const slideDuration = 4600;
  let currentIndex = 0;
  let intervalId = null;
  let animationTimer = null;

  const restartProgress = () => {
    progressBar.style.transition = "none";
    progressBar.style.transform = "scaleX(0)";

    if (prefersReducedMotion) {
      return;
    }

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        progressBar.style.transition = `transform ${slideDuration}ms linear`;
        progressBar.style.transform = "scaleX(1)";
      });
    });
  };

  const setActiveSlide = (index) => {
    currentIndex = (index + philosophySlides.length) % philosophySlides.length;
    const slide = philosophySlides[currentIndex];

    stepElement.textContent = slide.step;
    titleElement.textContent = slide.title;
    textElement.textContent = slide.text;
    countElement.textContent = `${currentIndex + 1} / ${philosophySlides.length}`;

    const dotButtons = dotsContainer.querySelectorAll(".presentation-dot");
    dotButtons.forEach((dot, dotIndex) => {
      dot.classList.toggle("is-active", dotIndex === currentIndex);
      dot.setAttribute("aria-pressed", dotIndex === currentIndex ? "true" : "false");
    });

    if (!prefersReducedMotion) {
      screen.classList.remove("is-switching");
      void screen.offsetWidth;
      screen.classList.add("is-switching");

      if (animationTimer) {
        clearTimeout(animationTimer);
      }
      animationTimer = setTimeout(() => {
        screen.classList.remove("is-switching");
      }, 520);
    }

    restartProgress();
  };

  const stopAutoplay = () => {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  };

  const startAutoplay = () => {
    if (prefersReducedMotion) {
      return;
    }

    stopAutoplay();
    intervalId = setInterval(() => {
      setActiveSlide(currentIndex + 1);
    }, slideDuration);
  };

  dotsContainer.innerHTML = "";
  philosophySlides.forEach((slide, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "presentation-dot";
    dot.setAttribute("aria-label", `Show slide ${index + 1}: ${slide.title}`);
    dot.setAttribute("aria-pressed", "false");
    dot.addEventListener("click", () => {
      setActiveSlide(index);
      startAutoplay();
    });
    dotsContainer.appendChild(dot);
  });

  setActiveSlide(0);
  startAutoplay();

  container.addEventListener("mouseenter", stopAutoplay);
  container.addEventListener("mouseleave", startAutoplay);
  container.addEventListener("focusin", stopAutoplay);
  container.addEventListener("focusout", (event) => {
    if (!container.contains(event.relatedTarget)) {
      startAutoplay();
    }
  });
}

function initializeReveal() {
  const revealElements = document.querySelectorAll("[data-reveal]");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -32px 0px",
      }
    );

    revealElements.forEach((element, index) => {
      element.style.transitionDelay = `${Math.min(index * 40, 320)}ms`;
      revealObserver.observe(element);
    });
  } else {
    revealElements.forEach((element) => {
      element.classList.add("is-visible");
    });
  }
}

function updateYear() {
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

function initializeSectionNav() {
  const navLinks = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));
  if (!navLinks.length) {
    return;
  }

  const sectionMap = new Map();
  const sections = [];

  navLinks.forEach((link) => {
    const hash = link.getAttribute("href");
    const sectionId = hash ? hash.slice(1) : "";
    const section = sectionId ? document.getElementById(sectionId) : null;
    if (sectionId && section) {
      sectionMap.set(sectionId, link);
      sections.push(section);
    }
  });

  if (!sections.length) {
    return;
  }

  const setActiveLink = (sectionId) => {
    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${sectionId}`);
    });
  };

  const firstSectionId = sections[0].id;
  const initialHash = window.location.hash ? window.location.hash.slice(1) : firstSectionId;
  setActiveLink(sectionMap.has(initialHash) ? initialHash : firstSectionId);

  if ("IntersectionObserver" in window) {
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      {
        threshold: 0.01,
        rootMargin: "-30% 0px -55% 0px",
      }
    );

    sections.forEach((section) => {
      navObserver.observe(section);
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const hash = link.getAttribute("href");
      if (!hash) {
        return;
      }
      setActiveLink(hash.slice(1));
    });
  });

  window.addEventListener("hashchange", () => {
    const hash = window.location.hash ? window.location.hash.slice(1) : "";
    if (sectionMap.has(hash)) {
      setActiveLink(hash);
    }
  });
}

renderLogos();
renderTeachingPhotos();
initializeDocumentViewer();
initializeOwnerLoginPopup();
renderDocumentCards("certificate-grid", certificateItems, "certificates");
renderDocumentCards("transcript-grid", transcriptItems, "transcripts");
renderContentManagerEvidence();
renderContentManagerVideos();
renderContentManagerPosters();
renderContentManagerWorkSamples();
initializeContentManagerToggles();
renderOperationsApplicationLogos();
initializePhilosophyPresentation();
initializeReveal();
initializeSectionNav();
updateYear();
