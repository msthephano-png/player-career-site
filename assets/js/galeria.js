const galleryDataUrl = new URL("../data/galeria.json", document.currentScript.src);
const galleryImageBase = "../../assets/images/galeria";

let galleryFiles = [];
let currentGalleryIndex = 0;

const galleryWall = document.getElementById("gallery-wall");
const totalCount = document.getElementById("gallery-total-count");
const firstDate = document.getElementById("gallery-first-date");
const rangeText = document.getElementById("gallery-range-text");
const heroImage = document.getElementById("gallery-hero-image");
const heroDate = document.getElementById("gallery-hero-date");
const lightbox = document.getElementById("gallery-lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxTitle = document.getElementById("lightbox-title");
const lightboxDate = document.getElementById("lightbox-date");
const lightboxClose = document.getElementById("gallery-lightbox-close");
const lightboxPrev = document.getElementById("gallery-lightbox-prev");
const lightboxNext = document.getElementById("gallery-lightbox-next");

function formatDate(fileName) {
  const stamp = fileName.slice(0, 14);
  const year = stamp.slice(0, 4);
  const month = stamp.slice(4, 6);
  const day = stamp.slice(6, 8);
  return `${day}/${month}/${year}`;
}

function formatTime(fileName) {
  const stamp = fileName.slice(0, 14);
  const hour = stamp.slice(8, 10);
  const minute = stamp.slice(10, 12);
  return `${hour}:${minute}`;
}

function buildCardTitle(index) {
  const set = [
    "Noite grande",
    "Taca no alto",
    "Momento decisivo",
    "Cena de destaque",
    "Capitulo marcante",
    "Arquivo da carreira"
  ];
  return set[index % set.length];
}

function showLightboxImage(index) {
  if (!galleryFiles.length) return;

  currentGalleryIndex = (index + galleryFiles.length) % galleryFiles.length;
  const fileName = galleryFiles[currentGalleryIndex];

  lightboxImage.src = `${galleryImageBase}/${fileName}`;
  lightboxImage.alt = `Momento ${currentGalleryIndex + 1}`;
  lightboxTitle.textContent = `${buildCardTitle(currentGalleryIndex)} #${String(currentGalleryIndex + 1).padStart(2, "0")}`;
  lightboxDate.textContent = `${formatDate(fileName)} - ${formatTime(fileName)}`;
}

function openLightbox(index) {
  showLightboxImage(index);
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
}

function renderGallery(files) {
  galleryFiles = files;

  if (!galleryFiles.length) {
    totalCount.textContent = "0";
    firstDate.textContent = "--";
    rangeText.textContent = "Nenhum momento encontrado.";
    galleryWall.innerHTML = '<div class="empty-message">Nenhuma imagem encontrada na pasta da galeria.</div>';
    return;
  }

  totalCount.textContent = String(galleryFiles.length);
  firstDate.textContent = formatDate(galleryFiles[0]);
  rangeText.textContent = `${formatDate(galleryFiles[0])} ate ${formatDate(galleryFiles[galleryFiles.length - 1])}`;
  heroDate.textContent = formatDate(galleryFiles[galleryFiles.length - 1]);
  heroImage.src = `${galleryImageBase}/${galleryFiles[galleryFiles.length - 1]}`;

  galleryWall.innerHTML = galleryFiles
    .map((fileName, index) => `
      <button class="gallery-card" type="button" data-index="${index}">
        <img src="${galleryImageBase}/${fileName}" alt="Momento ${index + 1}">
        <div class="gallery-card__meta">
          <div>
            <div class="gallery-card__title">${buildCardTitle(index)}</div>
            <div class="gallery-card__date">${formatDate(fileName)}</div>
          </div>
          <div class="pill">${formatTime(fileName)}</div>
        </div>
      </button>
    `)
    .join("");

  galleryWall.querySelectorAll(".gallery-card").forEach((card) => {
    card.addEventListener("click", () => {
      openLightbox(Number(card.getAttribute("data-index")));
    });
  });
}

async function initGallery() {
  try {
    const response = await fetch(galleryDataUrl);
    if (!response.ok) throw new Error(`Nao foi possivel carregar ${galleryDataUrl.pathname}`);
    const payload = await response.json();
    renderGallery(payload.images || []);
  } catch (error) {
    console.warn("Galeria sem manifesto gerado.", error);
    renderGallery([]);
  }
}

lightboxClose.addEventListener("click", closeLightbox);
lightboxPrev.addEventListener("click", () => showLightboxImage(currentGalleryIndex - 1));
lightboxNext.addEventListener("click", () => showLightboxImage(currentGalleryIndex + 1));

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (event) => {
  if (!lightbox.classList.contains("is-open")) return;
  if (event.key === "Escape") closeLightbox();
  if (event.key === "ArrowLeft") showLightboxImage(currentGalleryIndex - 1);
  if (event.key === "ArrowRight") showLightboxImage(currentGalleryIndex + 1);
});

initGallery();
