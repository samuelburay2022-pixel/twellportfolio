/*
  CONTENT EDITING GUIDE
  1) Add / remove logos in `logoItems` and `extraLogoItems`.
  2) Edit highlighted logos below profile photo in `highlightLogoItems`.
  3) Add / edit / delete teaching photos in the `teachingPhotos` list.
  4) Add / edit / delete certificates in the `certificateItems` list.
  5) Add / edit / delete transcripts in the `transcriptItems` list.
  6) Keep file paths relative to this project root.
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

const visitorsAnalyticsConfig = {
  // 1) Create GA4 property and copy Measurement ID (format: G-XXXXXXXXXX).
  gaMeasurementId: "",
  // 2) Add your GA report/share URL here. This URL requires your Google login.
  gaDashboardUrl: "",
  // 3) Simple owner access gate for this page section.
  ownerUsername: "",
  ownerPassword: "",
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

    if (isPdfFile(item.file)) {
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

  if (!dashboardUrl) {
    status.textContent = "Set gaDashboardUrl in main.js.";
    submitButton.disabled = true;
    setMessage("Dashboard link is not configured.", "error");
  } else if (!ownerUsername || !ownerPassword) {
    status.textContent = "Set ownerUsername and ownerPassword in main.js.";
    submitButton.disabled = true;
    setMessage("Owner login details are not configured yet.", "error");
  } else {
    status.textContent = "Enter your Admin/Owner login details.";
    submitButton.disabled = false;
  }

  trigger.addEventListener("click", openModal);
  closeButton.addEventListener("click", closeModal);
  backdrop.addEventListener("click", closeModal);

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!dashboardUrl || !ownerUsername || !ownerPassword) {
      return;
    }

    const enteredUsername = usernameInput.value.trim();
    const enteredPassword = passwordInput.value;
    const validLogin = enteredUsername === ownerUsername && enteredPassword === ownerPassword;

    if (!validLogin) {
      setMessage("Invalid login details.", "error");
      return;
    }

    setMessage("Login successful. Opening dashboard...", "success");
    window.open(dashboardUrl, "_blank", "noopener");
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

function initializeHeroMediaIntro() {
  const wrapper = document.getElementById("hero-media-visual");
  const introVideo = document.getElementById("hero-intro-video");
  const soundButton = document.getElementById("hero-video-sound-button");
  if (!wrapper || !introVideo) {
    return;
  }

  const prefersReducedMotion =
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const showProfileImage = () => {
    wrapper.classList.add("is-finished");
  };

  if (prefersReducedMotion) {
    showProfileImage();
    return;
  }

  introVideo.addEventListener("ended", showProfileImage, { once: true });
  introVideo.addEventListener("error", showProfileImage, { once: true });
  introVideo.addEventListener("abort", showProfileImage, { once: true });

  const showSoundButton = () => {
    soundButton?.classList.remove("is-hidden");
  };

  const hideSoundButton = () => {
    soundButton?.classList.add("is-hidden");
  };

  const playWithSound = () => {
    introVideo.muted = false;
    introVideo.defaultMuted = false;
    introVideo.volume = 1;
    return introVideo.play();
  };

  const playMuted = () => {
    introVideo.muted = true;
    introVideo.defaultMuted = true;
    return introVideo.play();
  };

  const startVideo = () => {
    const withSoundAttempt = playWithSound();
    if (!withSoundAttempt || typeof withSoundAttempt.catch !== "function") {
      hideSoundButton();
      return;
    }

    withSoundAttempt
      .then(() => {
        hideSoundButton();
      })
      .catch(() => {
        const mutedAttempt = playMuted();
        if (!mutedAttempt || typeof mutedAttempt.catch !== "function") {
          showSoundButton();
          return;
        }

        mutedAttempt
          .then(() => {
            showSoundButton();
          })
          .catch(() => {
            showProfileImage();
          });
      });
  };

  soundButton?.addEventListener("click", () => {
    const userPlayAttempt = playWithSound();
    if (userPlayAttempt && typeof userPlayAttempt.catch === "function") {
      userPlayAttempt
        .then(() => {
          hideSoundButton();
        })
        .catch(() => {
          showSoundButton();
        });
      return;
    }
    hideSoundButton();
  });

  introVideo.addEventListener("volumechange", () => {
    if (introVideo.muted || introVideo.volume === 0) {
      showSoundButton();
    } else {
      hideSoundButton();
    }
  });

  startVideo();
}

renderLogos();
renderTeachingPhotos();
initializeDocumentViewer();
initializeOwnerLoginPopup();
renderDocumentCards("certificate-grid", certificateItems, "certificates");
renderDocumentCards("transcript-grid", transcriptItems, "transcripts");
initializeHeroMediaIntro();
initializePhilosophyPresentation();
initializeReveal();
initializeSectionNav();
updateYear();
