const instagramDataUrl = new URL("../data/salazar-instagram.json", document.currentScript.src);
instagramDataUrl.searchParams.set("v", "instagram-full-3");
const instagramImageBase = "../../assets/images/salazar_instagram";

let instagramFiles = [];
let currentInstagramIndex = 0;

const instagramGrid = document.getElementById("instagram-grid");
const instagramCount = document.getElementById("instagram-count");
const instagramLightbox = document.getElementById("instagram-lightbox");
const instagramLightboxImage = document.getElementById("instagram-lightbox-image");
const instagramLightboxTitle = document.getElementById("instagram-lightbox-title");
const instagramClose = document.getElementById("instagram-lightbox-close");
const instagramPrev = document.getElementById("instagram-lightbox-prev");
const instagramNext = document.getElementById("instagram-lightbox-next");

function prettyName(fileName) {
  return fileName
    .replace(/\.[^.]+$/, "")
    .replace(/_/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function showInstagramImage(index) {
  if (!instagramFiles.length) return;

  currentInstagramIndex = (index + instagramFiles.length) % instagramFiles.length;
  const fileName = instagramFiles[currentInstagramIndex];

  instagramLightboxImage.src = `${instagramImageBase}/${fileName}`;
  instagramLightboxImage.alt = prettyName(fileName);
  instagramLightboxTitle.textContent = `${prettyName(fileName)} #${String(currentInstagramIndex + 1).padStart(2, "0")}`;
}

function openInstagramLightbox(index) {
  showInstagramImage(index);
  instagramLightbox.classList.add("is-open");
  instagramLightbox.setAttribute("aria-hidden", "false");
}

function closeInstagramLightbox() {
  instagramLightbox.classList.remove("is-open");
  instagramLightbox.setAttribute("aria-hidden", "true");
}

function renderInstagram(files) {
  instagramFiles = files;
  instagramCount.textContent = `${files.length} fotos no feed`;

  if (!files.length) {
    instagramGrid.innerHTML = '<div class="empty-message">Nenhuma foto encontrada em salazar_instagram.</div>';
    return;
  }

  instagramGrid.innerHTML = files
    .map((fileName, index) => `
      <button class="instagram-post" type="button" data-index="${index}">
        <img src="${instagramImageBase}/${fileName}" alt="${prettyName(fileName)}">
        <span>${prettyName(fileName)}</span>
      </button>
    `)
    .join("");

  instagramGrid.querySelectorAll(".instagram-post").forEach((post) => {
    post.addEventListener("click", () => openInstagramLightbox(Number(post.getAttribute("data-index"))));
  });
}

async function initInstagram() {
  try {
    const response = await fetch(instagramDataUrl);
    if (!response.ok) throw new Error(`Nao foi possivel carregar ${instagramDataUrl.pathname}`);
    const payload = await response.json();
    renderInstagram(payload.images || []);
  } catch (error) {
    console.warn("Instagram do Salazar sem manifesto gerado.", error);
    renderInstagram([]);
  }
}

instagramClose.addEventListener("click", closeInstagramLightbox);
instagramPrev.addEventListener("click", () => showInstagramImage(currentInstagramIndex - 1));
instagramNext.addEventListener("click", () => showInstagramImage(currentInstagramIndex + 1));

instagramLightbox.addEventListener("click", (event) => {
  if (event.target === instagramLightbox) closeInstagramLightbox();
});

document.addEventListener("keydown", (event) => {
  if (!instagramLightbox.classList.contains("is-open")) return;
  if (event.key === "Escape") closeInstagramLightbox();
  if (event.key === "ArrowLeft") showInstagramImage(currentInstagramIndex - 1);
  if (event.key === "ArrowRight") showInstagramImage(currentInstagramIndex + 1);
});

initInstagram();
