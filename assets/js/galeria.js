const galleryFiles = [
  "20260114212620_1.jpg",
  "20260116234630_1.jpg",
  "20260117204145_1.jpg",
  "20260118033944_1.jpg",
  "20260203220248_1.jpg",
  "20260206005028_1.jpg",
  "20260212173834_1.jpg",
  "20260212173837_1.jpg",
  "20260212173840_1.jpg",
  "20260212173841_1.jpg",
  "20260212173843_1.jpg",
  "20260212173844_1.jpg",
  "20260212173915_1.jpg",
  "20260212173946_1.jpg",
  "20260218032109_1.jpg",
  "20260218032115_1.jpg",
  "20260218032117_1.jpg",
  "20260218032125_1.jpg",
  "20260218032134_1.jpg",
  "20260218032156_1.jpg",
  "20260218032232_1.jpg",
  "20260218191240_1.jpg",
  "20260218191531_1.jpg",
  "20260218191532_1.jpg",
  "20260218191533_1.jpg",
  "20260218191820_1.jpg",
  "20260218191822_1.jpg",
  "20260218191824_1.jpg",
  "20260218192211_1.jpg",
  "20260218203905_1.jpg",
  "20260218203951_1.jpg",
  "20260218224329_1.jpg",
  "20260218224331_1.jpg",
  "20260220011344_1.jpg",
  "20260220011345_1.jpg",
  "20260220011349_1.jpg",
  "20260220011353_1.jpg",
  "20260220011355_1.jpg",
  "20260220011356_1.jpg",
  "20260220011357_1.jpg",
  "20260220011400_1.jpg",
  "20260220011401_1.jpg",
  "20260220011404_1.jpg",
  "20260220011406_1.jpg",
  "20260220011407_1.jpg",
  "20260220011409_1.jpg",
  "20260224023611_1.jpg",
  "20260224023613_1.jpg",
  "20260224023709_1.jpg",
  "20260224023710_1.jpg",
  "20260224023717_1.jpg",
  "20260224023726_1.jpg",
  "20260301234452_1.jpg",
  "20260315155051_1.jpg",
  "20260315155051_2.jpg",
  "20260315161853_1.jpg",
  "20260321180049_1.jpg",
  "20260321180051_1.jpg",
  "20260321182249_1.jpg",
  "20260321182250_1.jpg",
  "20260321182257_1.jpg",
  "20260323162958_1.jpg",
  "20260323163050_1.jpg",
  "20260326005049_1.jpg",
  "20260326005050_1.jpg",
  "20260326005100_1.jpg",
  "20260327012630_1.jpg",
  "20260327012641_1.jpg",
  "20260327034834_1.jpg",
  "20260328195645_1.jpg",
  "20260328214117_1.jpg",
  "20260328214232_1.jpg",
  "20260328230843_1.jpg",
  "20260328230937_1.jpg",
  "20260402234446_1.jpg",
  "20260403014036_1.jpg",
  "20260403023312_1.jpg",
  "20260405001001_1.jpg",
  "20260405001007_1.jpg",
  "20260405001009_1.jpg",
  "20260405001011_1.jpg",
  "20260405001020_1.jpg",
  "20260405001025_1.jpg",
  "20260405024207_1.jpg",
  "20260405035411_1.jpg",
  "20260405035414_1.jpg",
  "20260405035431_1.jpg",
  "20260405040431_1.jpg",
  "20260405042840_1.jpg",
  "20260411184309_1.jpg",
  "20260412175630_1.jpg",
  "20260426223145_1.jpg",
  "20260427002505_1.jpg",
  "20260427002508_1.jpg",
  "20260427193539_1.jpg",
  "20260427193555_1.jpg",
  "20260427193558_1.jpg",
  "20260427193627_1.jpg",
  "20260428010022_1.jpg",
  "20260428010026_1.jpg",
  "20260428010249_1.jpg",
  "20260428032905_1.jpg",
  "20260428033356_1.jpg",
  "20260428033357_1.jpg",
  "20260429014942_1.jpg"
];

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

function openLightbox(fileName, index) {
  lightboxImage.src = `../../assets/images/galeria/${fileName}`;
  lightboxImage.alt = `Momento ${index + 1}`;
  lightboxTitle.textContent = `${buildCardTitle(index)} #${String(index + 1).padStart(2, "0")}`;
  lightboxDate.textContent = `${formatDate(fileName)} • ${formatTime(fileName)}`;
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
}

function renderGallery() {
  totalCount.textContent = String(galleryFiles.length);
  firstDate.textContent = formatDate(galleryFiles[0]);
  rangeText.textContent = `${formatDate(galleryFiles[0])} ate ${formatDate(galleryFiles[galleryFiles.length - 1])}`;
  heroDate.textContent = formatDate(galleryFiles[galleryFiles.length - 1]);
  heroImage.src = `../../assets/images/galeria/${galleryFiles[galleryFiles.length - 1]}`;

  galleryWall.innerHTML = galleryFiles
    .map((fileName, index) => `
      <button class="gallery-card" type="button" data-file="${fileName}" data-index="${index}">
        <img src="../../assets/images/galeria/${fileName}" alt="Momento ${index + 1}">
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
      const index = Number(card.getAttribute("data-index"));
      const fileName = card.getAttribute("data-file");
      openLightbox(fileName, index);
    });
  });
}

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLightbox();
});

renderGallery();
