const clubSpellDataUrl = new URL("../data/jogadores.json", document.currentScript.src);
clubSpellDataUrl.searchParams.set("v", "players-2053-fix3");

function getCurrentSpellPath() {
  const parts = window.location.pathname.split("/");
  return `pages/clubes/${parts[parts.length - 1]}`;
}

function findCurrentSpell(players) {
  const currentPath = getCurrentSpellPath();
  for (const player of players) {
    const spell = player.spells.find((item) => item.pagePath === currentPath);
    if (spell) return spell;
  }
  return null;
}

function updateSummaryCards(spell) {
  const values = [spell.matches, spell.goals, spell.assists];
  document.querySelectorAll(".stats-grid .summary-card").forEach((card, index) => {
    const value = card.querySelector(".summary-card__value");
    if (value && values[index] !== undefined) value.textContent = String(values[index]);
  });

  const subtitle = document.querySelector(".club-hero__subtitle");
  if (subtitle && spell.description) {
    subtitle.textContent = spell.description;
  }
}

function updateCompetitionTable(spell) {
  const tbody = document.querySelector(".table-card tbody");
  if (!tbody) return;

  const rows = spell.competitionStats.map((item) => `
    <tr>
      <td>${item.competition}</td>
      <td>${item.matches}</td>
      <td>${item.goals}</td>
      <td>${item.assists}</td>
    </tr>
  `);

  rows.push(`
    <tr class="total-row">
      <td>Total</td>
      <td>${spell.matches}</td>
      <td>${spell.goals}</td>
      <td>${spell.assists}</td>
    </tr>
  `);

  tbody.innerHTML = rows.join("");
}

function normalizeText(value) {
  return normalizeHonorText(value);
}

function captureTrophyImageMap() {
  return Array.from(document.querySelectorAll(".trophy-grid .trophy-card")).reduce((accumulator, card) => {
    const name = card.querySelector(".trophy-card__name")?.textContent.trim();
    const image = card.querySelector(".trophy-card__visual")?.innerHTML || "";
    if (!name) return accumulator;

    rememberHonorImage(accumulator, normalizeHonorText(name), image);
    (HONOR_IMAGE_ALIASES[normalizeHonorText(name)] || []).forEach((alias) => {
      rememberHonorImage(accumulator, alias, image);
    });
    return accumulator;
  }, new Map());
}

function getHonorCategoryFromClubSection(section) {
  const text = normalizeText(
    `${section.querySelector(".section__eyebrow")?.textContent || ""} ${section.querySelector(".section__title")?.textContent || ""}`,
  );
  if (text.includes("premio") || text.includes("reconhecimento")) return "Prêmio individual";
  if (text.includes("titulo") || text.includes("trofeu") || text.includes("conquista")) return "Título coletivo";
  return "";
}

function buildTrophyCards(honors, imageMap) {
  return honors
    .map((honor) => {
      const image = resolveHonorImage(imageMap, honor.name);
      return `
        <article class="trophy-card">
          <div class="trophy-card__visual">${image}</div>
          <div class="trophy-card__name">${honor.name}</div>
          <div class="trophy-card__count">${honor.quantity}x</div>
        </article>
      `;
    })
    .join("");
}

function updateHonorGrids(spell, imageMap) {
  if (!spell.honors.length) return;

  const resolvedMap = imageMap || captureTrophyImageMap();
  document.querySelectorAll(".section").forEach((section) => {
    const grid = section.querySelector(".trophy-grid");
    const category = getHonorCategoryFromClubSection(section);
    if (!grid || !category) return;

    const honors = dedupeHonors(spell.honors.filter((honor) => honor.category === category));
    grid.innerHTML = honors.length ? buildTrophyCards(honors, resolvedMap) : "";
  });
}

async function initClubSpellData() {
  try {
    const response = await fetch(clubSpellDataUrl);
    if (!response.ok) {
      throw new Error(`Nao foi possivel carregar ${clubSpellDataUrl.pathname}`);
    }

    const payload = await response.json();
    const spell = findCurrentSpell(payload.players);
    if (!spell) return;

    const honorImageMap = captureTrophyImageMap();
    updateSummaryCards(spell);
    updateCompetitionTable(spell);
    updateHonorGrids(spell, honorImageMap);
  } catch (error) {
    console.warn("Usando dados embutidos da passagem como fallback.", error);
  }
}

initClubSpellData();

