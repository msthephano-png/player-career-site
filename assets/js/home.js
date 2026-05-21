const playersDataUrl = new URL("../data/jogadores.json", document.currentScript.src);

function updatePlayerCards(players) {
  players.forEach((player) => {
    const card = document.querySelector(`.player-card[href="pages/jogadores/${player.slug}.html"]`);
    const meta = card?.querySelector(".player-card__meta");
    if (!meta) return;

    meta.innerHTML = `
      <span class="pill">${player.totals.matches} jogos</span>
      <span class="pill">${player.totals.goals} gols</span>
      <span class="pill">${player.totals.assists} assistências</span>
    `;
  });
}

async function initHomeData() {
  try {
    const response = await fetch(playersDataUrl);
    if (!response.ok) {
      throw new Error(`Nao foi possivel carregar ${playersDataUrl.pathname}`);
    }
    const payload = await response.json();
    updatePlayerCards(payload.players);
  } catch (error) {
    console.warn("Usando numeros embutidos da home como fallback.", error);
  }
}

initHomeData();
