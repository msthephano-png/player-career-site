const playerProfileDataUrl = new URL("../data/jogadores.json", document.currentScript.src);
playerProfileDataUrl.searchParams.set("v", "players-2052-fixes-3");

function getCurrentPlayerSlug() {
  const fileName = window.location.pathname.split("/").pop() || "";
  return fileName.replace(/\.html$/, "");
}

function setCardValue(cards, index, value) {
  const target = cards[index]?.querySelector(".metric-card__value, .summary-card__value");
  if (target) target.textContent = String(value);
}

function updatePlayerProfile(player) {
  const metricCards = document.querySelectorAll(".metric-card");
  setCardValue(metricCards, 0, player.totals.matches);
  setCardValue(metricCards, 1, player.totals.goals);
  setCardValue(metricCards, 2, player.totals.assists);

  const summaryCards = document.querySelectorAll(".summary-row .summary-card");
  setCardValue(summaryCards, 0, player.totals.collectiveTitles);
  setCardValue(summaryCards, 1, player.totals.individualAwards);

  document.querySelectorAll(".club-card").forEach((card) => {
    const href = card.getAttribute("href") || "";
    const spell = player.spells.find((item) => href.endsWith(item.pagePath.split("/").pop()));
    const caption = card.querySelector(".club-card__caption");
    if (!spell || !caption) return;

    caption.textContent = `${spell.matches} jogos, ${spell.goals} gols e ${spell.assists} assistências.`;
  });

  updateHonorSections(player, captureHonorImageMaps());
}

function captureHonorImageMaps() {
  const maps = new Map();

  document.querySelectorAll(".section").forEach((section) => {
    const grid = section.querySelector(".awards-grid");
    const category = getHonorCategoryFromSection(section);
    if (!grid || !category) return;
    maps.set(category, buildHonorImageMap(grid));
  });

  return maps;
}

function normalizeText(value) {
  return normalizeHonorText(value);
}

function getHonorCategoryFromSection(section) {
  const title = normalizeText(section.querySelector(".section__title")?.textContent);
  if (title.includes("premio") || title.includes("reconhecimento") || title.includes("marca")) {
    return "Prêmio individual";
  }
  if (title.includes("titulo") || title.includes("conquista") || title.includes("vitrine")) {
    return "Título coletivo";
  }
  return "";
}

function buildHonorImageMap(grid) {
  return Array.from(grid.querySelectorAll(".award-card")).reduce((accumulator, card) => {
    const name = card.querySelector(".award-card__name")?.textContent.trim();
    const image = card.querySelector(".award-card__image")?.innerHTML || "";
    if (!name) return accumulator;

    rememberHonorImage(accumulator, normalizeHonorText(name), image);
    (HONOR_IMAGE_ALIASES[normalizeHonorText(name)] || []).forEach((alias) => {
      rememberHonorImage(accumulator, alias, image);
    });
    return accumulator;
  }, new Map());
}

function updateHonorSections(player, honorImageMaps) {
  document.querySelectorAll(".section").forEach((section) => {
    const grid = section.querySelector(".awards-grid");
    const category = getHonorCategoryFromSection(section);
    if (!grid || !category) return;

    const imageMap = honorImageMaps.get(category) || new Map();
    const honors = dedupeHonors(player.honors.filter((honor) => honor.category === category));
    if (!honors.length) return;

    grid.innerHTML = honors
      .map((honor) => {
        const image = resolveHonorImage(imageMap, honor.name);
        return `
          <article class="award-card">
            <div class="award-card__image">${image}</div>
            <div class="award-card__name">${honor.name}</div>
            <div class="award-card__count">${honor.quantity}x</div>
          </article>
        `;
      })
      .join("");
  });
}

async function initPlayerProfileData() {
  try {
    const response = await fetch(playerProfileDataUrl);
    if (!response.ok) {
      throw new Error(`Nao foi possivel carregar ${playerProfileDataUrl.pathname}`);
    }

    const payload = await response.json();
    const player = payload.players.find((item) => item.slug === getCurrentPlayerSlug());
    if (player) updatePlayerProfile(player);
  } catch (error) {
    console.warn("Usando dados embutidos do perfil como fallback.", error);
  }
}

initPlayerProfileData();

