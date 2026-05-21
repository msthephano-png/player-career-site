/* honor-utils v2 */
const HONOR_IMAGE_ALIASES = {
  "mundial de clubes": ["intercontinental", "mundial"],
  intercontinental: ["mundial de clubes"],
  "recopa sul-americana": ["recopa"],
  recopa: ["recopa sul-americana"],
  "supercopa da europa": ["supercup"],
  supercup: ["supercopa da europa"],
  "copa da franca": ["coupe de france"],
  "copa da italia (coppa italia)": ["coppa italia"],
  "copa da alemanha (dfb-pokal)": ["dfb pokal", "dfb-pokal"],
  "supercopa da alemanha (dfl supercup)": ["dfl supercup"],
  "supercopa da franca": ["supercopa da franca"],
  "sul-americana": ["sudamericana"],
  "super mundial": ["super mundial"],
  "champions league": ["ucl"],
  "copa do mundo": ["copa"],
  "copa america": ["copa america"],
  "eredivisie": ["eredivisie"],
  "knvb beker": ["knvb"],
  "taca de portugal": ["taca"],
};

const HONOR_CANONICAL_ALIASES = {
  ...HONOR_IMAGE_ALIASES,
  intercontinental: ["mundial de clubes"],
  recopa: ["recopa sul-americana"],
  supercup: ["supercopa da europa"],
};

const HONOR_STATIC_IMAGES = {
  "mundial de clubes":
    '<img src="../../assets/images/titulos/intercontinental.png" alt="Mundial de Clubes">',
  "recopa sul-americana":
    '<img src="../../assets/images/titulos/recopa.png" alt="Recopa Sul-Americana">',
  "supercopa da europa":
    '<img src="../../assets/images/titulos/supercup.png" alt="Supercopa da Europa">',
  intercontinental:
    '<img src="../../assets/images/titulos/intercontinental.png" alt="Mundial de Clubes">',
  recopa: '<img src="../../assets/images/titulos/recopa.png" alt="Recopa Sul-Americana">',
  supercup: '<img src="../../assets/images/titulos/supercup.png" alt="Supercopa da Europa">',
  "copa da italia (coppa italia)":
    '<img src="../../assets/images/titulos/coppa_italia.png" alt="Copa da Itália">',
  "supercopa da alemanha (dfl supercup)":
    '<img src="../../assets/images/titulos/dfl_supercup.png" alt="Supercopa da Alemanha">',
};

function rememberHonorImage(map, key, image) {
  if (!key || !image) return;
  if (!map.get(key)) map.set(key, image);
}

function normalizeHonorText(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function getHonorCanonicalKey(name) {
  const normalized = normalizeHonorText(name);
  if (HONOR_CANONICAL_ALIASES[normalized]) {
    return HONOR_CANONICAL_ALIASES[normalized][0];
  }
  return normalized;
}

function resolveHonorImage(imageMap, honorName) {
  const key = normalizeHonorText(honorName);
  if (imageMap.has(key)) {
    const hit = imageMap.get(key);
    if (hit) return hit;
  }

  const aliases = HONOR_IMAGE_ALIASES[key] || [];
  for (const alias of aliases) {
    if (imageMap.has(alias)) {
      const hit = imageMap.get(alias);
      if (hit) return hit;
    }
  }

  for (const [mapKey, html] of imageMap.entries()) {
    if (html && (mapKey.includes(key) || key.includes(mapKey))) return html;
  }

  if (HONOR_STATIC_IMAGES[key]) return HONOR_STATIC_IMAGES[key];
  for (const alias of aliases) {
    if (HONOR_STATIC_IMAGES[alias]) return HONOR_STATIC_IMAGES[alias];
  }

  return "";
}

function dedupeHonors(honors) {
  const grouped = new Map();

  honors.forEach((honor) => {
    const canonical = getHonorCanonicalKey(honor.name);
    const existing = grouped.get(canonical);
    if (!existing) {
      grouped.set(canonical, { ...honor });
      return;
    }

    existing.quantity += honor.quantity;
    if (honor.name.length > existing.name.length) {
      existing.name = honor.name;
    }
  });

  return Array.from(grouped.values());
}
