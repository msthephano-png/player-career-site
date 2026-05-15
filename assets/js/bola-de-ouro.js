// ── Bola de Ouro – dados e lógica ───────────────────────────────────────────

const ballonYears = Array.from({ length: 25 }, (_, i) => 2026 + i);

// Posição = índice + 1 (índice 0 = 1º lugar)
const ballonData = {
  2026: ["Yamal","Güler","Palmer","Pedri","Bellingham","Vinícius Júnior","Musiala","Gavi","Rodrygo","Mbappé","Nico Williams","Saka","Wirtz","Valverde","Gündogan","Rafael Leão","Kane","Tchouaméni","Dani Olmo","Bernardo Silva","Ødegaard","Lautaro Martínez","Hakimi","Osimhen","Endrick","João Félix","Theo Hernández","Rúben Dias","Ter Stegen","Çalhanoğlu"],
  2027: ["Kane","Yamal","Mbappé","Musiala","Bellingham","Güler","Vinícius Júnior","Pedri","Valverde","Rodrygo","Wirtz","Saka","Nico Williams","Coman","Kimmich","Lautaro Martínez","Osimhen","Rafael Leão","Palmer","Chiesa","Theo Hernández","Rúben Dias","De Ligt","Ter Stegen","Szczęsny","Dani Olmo","Ødegaard","Bernardo Silva","Endrick","Gavi"],
  2028: ["Yamal","Sané","Zubimendi","Bellingham","Mbappé","Vinícius Júnior","Saka","Pedri","Musiala","Güler","Rodrygo","Palmer","Nico Williams","Rice","Ødegaard","Kane","Wirtz","Valverde","Gavi","Kimmich","Theo Hernández","Rafael Leão","Rúben Dias","Ter Stegen","Saliba","Hakimi","João Félix","Dani Olmo","Endrick","Garcia"],
  2029: ["Wirtz","Yamal","Valverde","Bellingham","Mbappé","Musiala","Güler","Pedri","Szoboszlai","Mac Allister","Haaland","Rodrygo","Nico Williams","Palmer","Rice","Ødegaard","Kvaratskhelia","Vitinha","Endrick","Gavi","Saliba","Araújo","Donnarumma","Diogo Jota","Luis Díaz","João Neves","Hakimi","Cubarsí","Zaire-Emery","Rafael Leão"],
  2030: ["Yamal","Pedri","Samu","Nico Williams","Gavi","Zubimendi","Musiala","Wirtz","Mbappé","Vitinha","João Neves","Rafael Leão","Kvaratskhelia","Theo Hernández","Donnarumma","Araújo","Cubarsí","Endrick","Jesus Fonseca","Bernardo Silva","Rodrygo","Bellingham","Valverde","Saliba","Tonali","Garcia","Hakimi","Leão","Bastoni","Escobar"],
  2031: ["Lautaro Martínez","Yamal","Haaland","Kvaratskhelia","Ødegaard","De Jong","Estevão","Donnarumma","Mbappé","Musiala","Olise","Rodri","Nuno Mendes","Pedri","Wirtz","Bellingham","Balde","Tomás Araújo","Pacho","Vitinha","Samu","Nico Williams","Gavi","Cubarsí","João Neves","Rafael Leão","Hakimi","Ter Stegen","Valverde","Diogo Costa"],
  2032: ["Samu","Adeyemi","Ødegaard","Yamal","Kvaratskhelia","Jesus Fonseca","Sesko","Estevão","Escobar","Pedri","Nico Williams","Garcia","Musiala","Wirtz","Bellingham","Balde","Tomás Araújo","Pacho","Carreras","Donnarumma","Gavi","Endrick","Cubarsí","João Neves","Vitinha","Adeyemi","Rodri","Rafael Leão","Haaland","Diogo Costa"],
  2033: ["Samu","Garcia","Javi Guerra","Yamal","Ødegaard","Kvaratskhelia","Estevão","Jesus Fonseca","Adeyemi","Donnarumma","Escobar","Sesko","Pedri","Nico Williams","Musiala","Wirtz","Bellingham","Balde","Tomás Araújo","Pacho","Carreras","Endrick","Cubarsí","João Neves","Vitinha","Xavi Simons","Rafael Leão","Haaland","Agirrezabala","Diego Lopes"],
  2034: ["Endrick","Haaland","Garcia","Yamal","Samu","Jesus Fonseca","Ødegaard","Kvaratskhelia","Musiala","Adeyemi","Bellingham","Escobar","Pedri","Nico Williams","Estevão","Vitinha","João Neves","Donnarumma","Balde","Tomás Araújo","Pacho","Carreras","Cubarsí","Gavi","Wirtz","Rafael Leão","Xavi Simons","Julian Alvarez","Hakimi","Sesko"],
  2035: ["Haaland","Greenwood","Escobar","Musiala","Yamal","Pino","Jesus Fonseca","Garcia","Endrick","Samu","Adeyemi","Ødegaard","Kvaratskhelia","Nico Williams","Pedri","Gavi","Bellingham","Donnarumma","Balde","Tomás Araújo","Pacho","Carreras","Cubarsí","Almeida","Kruger","Rafael Leão","Xavi Simons","Vitinha","Estevão","Sesko"],
  2036: ["Jesus Fonseca","Xavi Simons","Larsson","Uzun","Almada","David","Hato","Garcia","Endrick","Samu","Escobar","Musiala","Yamal","Nico Williams","Pedri","Gavi","Bellingham","Denis","Balde","Ferrari","Marcos Leonardo","Carreras","Cubarsí","Almeida","Kruger","Rafael Leão","Xavi Simons","Vitinha","Estevão","Ferrari"],
  2037: ["David","Garcia","Jesus Fonseca","Estevão","Escobar","Denis","Ferrari","Bernie","Roux","Bernier","Larsson","Haaland","Musiala","Almeida","Kruger","Lefebvre","Yamal","Forrest","Thomas","Moreau","Germain","Rodri Jr","Marquinhos Jr","Irala","Balde","Xavi Simons","Endrick","Jude Bellingham","Jobe Bellingham"],
  2038: ["Escobar","Garcia","Yamal","Irala","Mastantuono","Echeverri","Nico Paz","Jobe Bellingham","Jens Hahn","David","Estevão","Güler","Ayala","Siegmund","Pedro Cardoso","Denis","Vuskovic","Hato","Ferrari","Bernie","Germain","Lejeune","Endrick","Roux","Forrest","Almeida","Lefebvre","Kruger","Jesus Fonseca"],
  2039: ["David","Garcia","Endrick","Santigo","João Neves","Estevão","Germain","Obi","Denis","Ferrari","Bernie","Roux","Forrest","Almeida","Reyes","Kruger","Abreu","Cubarsí","Luis Guilherme","Schumacher","Cherki","Escobar","Marino","Howard","Rodri Jr","Lefebvre","Russo","Yamal","Mancini"],
  2040: ["Jesus Fonseca","Fabio Duarte","Varga","Peralta","Serrano","Norman","Sanchez","Leroy","Bruno Gomes","Garcia","Yamal","Guerra","Alex Watson","Amos","Navarro","David","Reyes","Ibrahim","Dembele Jr","Dani Nieto","Santigo","Eduardo Ribeiros","Schumacher","Hyde","Endrick","Estevão","Escobar","Howard","Abreu"],
  2041: ["David","Escobar","Denis Costa","Germain","Yamal","Denis Cristea","Damiano Rossi","Kadlec","Dani Nieto","Alessio Fiore","Zimmermann","Thomas","Lefebvre","Bernie","Sem Van","Ferrari","Bruno Gomes","Ibrahim","Bernie","Koren","Denis","Niang","Sandoval","Roux","Gallardo","Jesus Fonseca","Peralta","Santigo","Estevão"],
  2042: ["Fabio Duarte","Gabriele Guerra","Tyler Norman","Peralta","Jacob Taylor","Guilherme Contreras","Daniel Escobar","Gregorio Ramos","Mauro Esposito","Martin Sanchez","David","Santigo","Leroy","Dimarco Jr","Piero Greco","Daniel Conti","Escobar","Afonso Garcia","Alberto De Angelis","Eddie George","Iker Marin","Michelle Ricci","Miguel Correia","Estevão","Roux","Jesus Fonseca","Ferrari","Denis","Moreau"],
  2043: ["Charles Mohamed","Fabio Duarte","Daniel Escobar","Ahmed","Rizzo","Pawtowski","Oscar Perez","Madsen","Pedro Navarro","Insua","Peralta","Russo","Orellana","Juvanovic","Serranos","Gregorio Ramos","Afonso Garcia","Martin Sanchez","Sergio Montes","Fathi Ibrahim","Leroy","Moise Bamba","Uribe","Dani Nieto","Davis","Santigo","Walsh","Massey","Niang"],
  2044: ["David Bouchard","Fabio Duarte","Dembele Jr","Kovalenco","David","Caio Cruz","Bernier","Hahn","Eduardo Ferreira","Moreau","Kadlec","Germain","Rodgers","Afonso Borges","Lefebvre","Fischer","Riou","Saavedra","Dennis","Peralta","Albert Morales","Leroy","Roux","Santigo","Charles Mohamed","Thomas","Ahmed","Tyler Norman","Gabriele Guerra"],
  2045: ["Fabio Duarte","David Bouchard","Bradshaw","Pelletier","Barnes","Santigo","Jovanovic","Reyes","Peralta","Kovacevic","Leroy","Lang","Sanchez","Kovalenko","Powell","Hahn","Serrano","Kadlec","Dembele Jr","Howard","De Carvalho","Ramzi","Carlton Palmer","Ibrahim","Bryant","Guerra","Rodri Jr","David","Charles Mohamed"],
  2046: ["Howard","Ramiro Escobar","Fathi Ibrahim","David","Mann","David Bouchard","Reyes","Fabio Duarte","Kovalenko","Dembele Jr","Denis","Santigo","Field","Rodri Jr","Lefebvre","Caio Cruz","Hassan","Felix Ryan","Contreras","Santiago Silva","Varga","Bryant","Charles Mohamed","Dimarco Jr","Fiore","Vivian Jr","Kruger","Germain","Mason","Laurent"],
  2047: ["Fabio Duarte","David Bouchard","Howard","Leroy","Yasin Demir","Kovacevic","Kovalenko","Reyes","Denis Costa","Edwards","Hahn","De Carvalho","Lang","Fischer","Dembele Jr","Abreu","Parkin","Powell","Shevchuk","Moreau","Poli","Saavedra","Hansen","Field","Kadlec","Charles Mohamed","Rodri Jr","Fathi Ibrahim","Santigo","Michel"],
  2048: ["Ramiro Escobar","Fabio Duarte","Howard","Madsen","Nieto","Moreau","Powell","Acuna","Blanco","Perkins","Afonso Garcia","Leroy","Lang","Ibrahim","Kovacevic","Fiore","Edwards","Bernal","Li","Prieto","Seydou","Giordano","Kovalenko","David Bouchard","David","Fischer","De Carvalho","Zapada","Charles Mohamed","Raul Nunez"],
  2049: ["Santigo","Reyes","David Bouchard","Marin","Diabete","Sanogo","Ramiro Escobar","Schafer","Juraj Kovacevic","Whitehouse","Kristensen","Afonso Garcia","Nieto","Simon","Leroy","Fiore","Bryant","Costa","Madsen","Wawrzyniak","David","Fabio Duarte","Gomez","Wells","Parkin","Weston","Kadlec","Rossi","Kovalenko","Nilson"],
  2050: null
};

// Extensão dos arquivos de foto por ano
function getBallonImgExt(yearShort, file) {
  const jpgYears = { 27: ['vencedor'], 28: ['vencedor'], 38: ['vencedor'], 48: ['terceiro'], 49: ['segundo'] };
  const capitalS = { 46: ['segundo'] }; // pasta 46 tem Segundo.png (maiúsculo)
  if (jpgYears[yearShort] && jpgYears[yearShort].includes(file)) return 'jpg';
  return 'png';
}

function getBallonImgName(yearShort, file) {
  if (yearShort === 46 && file === 'segundo') return 'Segundo';
  return file;
}

// ── Computar estatísticas por jogador ────────────────────────────────────────
function computeBallonStats() {
  const stats = {}; // nome → { nominations, top3, top2, top1, positions: [] }

  for (const [yearStr, list] of Object.entries(ballonData)) {
    if (!list) continue;
    const year = parseInt(yearStr);
    list.forEach((name, idx) => {
      const pos = idx + 1;
      if (!stats[name]) stats[name] = { nominations: 0, top1: 0, top2: 0, top3: 0, positions: [] };
      stats[name].nominations++;
      stats[name].positions.push({ year, pos });
      if (pos === 1) stats[name].top1++;
      if (pos === 2) stats[name].top2++;
      if (pos === 3) stats[name].top3++;
    });
  }
  return stats;
}

// ── Renderizar seção Bola de Ouro ────────────────────────────────────────────
function renderBallonSection(year) {
  const container = document.getElementById('ballon-root');
  if (!container) return;

  const list = ballonData[year];
  const yearShort = year - 2000; // 2026 → 26
  const imgBase = `../../assets/images/bola-de-ouro/${yearShort}`;

  if (!list) {
    // Em andamento
    container.innerHTML = `
      <div class="ballon-ongoing">
        <div class="section__eyebrow">Temporada em andamento</div>
        <h3 class="section__title">2050 · Votação aberta</h3>
        <p class="section__copy">Os indicados ainda não foram anunciados. Acompanhe aqui quando a lista sair.</p>
      </div>`;
    return;
  }

  const stats = computeBallonStats();

  // Top 3 com fotos
  const [p1, p2, p3] = list;
  const ext1  = getBallonImgExt(yearShort, 'vencedor');
  const ext2  = getBallonImgExt(yearShort, 'segundo');
  const ext3  = getBallonImgExt(yearShort, 'terceiro');
  const name2 = getBallonImgName(yearShort, 'segundo');

  const podiumHTML = `
    <div class="ballon-podium">
      <!-- 2º lugar -->
      <div class="ballon-podium__card ballon-podium__card--silver">
        <div class="ballon-podium__rank">2</div>
        <div class="ballon-podium__photo-wrap">
          <img src="${imgBase}/segundo.${ext2}" alt="${p2}" onerror="this.style.display='none'">
        </div>
        <div class="ballon-podium__name">${p2}</div>
        <div class="ballon-podium__label">Vice-campeão</div>
      </div>

      <!-- 1º lugar -->
      <div class="ballon-podium__card ballon-podium__card--gold">
        <div class="ballon-podium__rank">1</div>
        <div class="ballon-podium__crown">🏆</div>
        <div class="ballon-podium__photo-wrap">
          <img src="${imgBase}/vencedor.${ext1}" alt="${p1}" onerror="this.style.display='none'">
        </div>
        <div class="ballon-podium__name">${p1}</div>
        <div class="ballon-podium__label">Bola de Ouro ${year}</div>
      </div>

      <!-- 3º lugar -->
      <div class="ballon-podium__card ballon-podium__card--bronze">
        <div class="ballon-podium__rank">3</div>
        <div class="ballon-podium__photo-wrap">
          <img src="${imgBase}/terceiro.${ext3}" alt="${p3}" onerror="this.style.display='none'">
        </div>
        <div class="ballon-podium__name">${p3}</div>
        <div class="ballon-podium__label">3º lugar</div>
      </div>
    </div>`;

  // Lista completa (posição 4 em diante)
  const listRows = list.slice(3).map((name, idx) => {
    const pos = idx + 4;
    return `<li class="ballon-list__item" data-player="${name}">
      <span class="ballon-list__pos">${pos}</span>
      <span class="ballon-list__name">${name}</span>
      <span class="ballon-list__arrow">›</span>
    </li>`;
  }).join('');

  container.innerHTML = `
    ${podiumHTML}
    <div class="section__eyebrow" style="margin-top:48px">Indicados completos</div>
    <h3 class="section__title">Ranking ${year}</h3>
    <ol class="ballon-list">
      ${listRows}
    </ol>`;

  // Eventos de clique na lista
  container.querySelectorAll('.ballon-list__item').forEach(el => {
    el.addEventListener('click', () => openBallonModal(el.dataset.player, stats));
  });

  // Clique nos cards do pódio
  container.querySelectorAll('.ballon-podium__card').forEach(card => {
    card.addEventListener('click', () => {
      const name = card.querySelector('.ballon-podium__name').textContent;
      openBallonModal(name, stats);
    });
  });
}

// ── Modal do jogador ─────────────────────────────────────────────────────────
function openBallonModal(playerName, stats) {
  const modal  = document.getElementById('ballon-modal');
  const pStats = stats[playerName] || { nominations: 0, top1: 0, top2: 0, top3: 0, positions: [] };

  const posRows = pStats.positions
    .sort((a, b) => a.year - b.year)
    .map(p => {
      const medal = p.pos === 1 ? '🥇' : p.pos === 2 ? '🥈' : p.pos === 3 ? '🥉' : '';
      return `<tr class="${p.pos <= 3 ? 'ballon-modal__highlight' : ''}">
        <td>${p.year}</td>
        <td>${medal} ${p.pos}º</td>
      </tr>`;
    }).join('');

  document.getElementById('ballon-modal-name').textContent = playerName;
  document.getElementById('ballon-modal-stats').innerHTML = `
    <div class="ballon-modal__metrics">
      <div class="ballon-modal__metric">
        <div class="ballon-modal__metric-val">${pStats.nominations}</div>
        <div class="ballon-modal__metric-label">Indicações</div>
      </div>
      <div class="ballon-modal__metric ballon-modal__metric--gold">
        <div class="ballon-modal__metric-val">${pStats.top1}</div>
        <div class="ballon-modal__metric-label">🥇 Venceu</div>
      </div>
      <div class="ballon-modal__metric ballon-modal__metric--silver">
        <div class="ballon-modal__metric-val">${pStats.top2}</div>
        <div class="ballon-modal__metric-label">🥈 Vice</div>
      </div>
      <div class="ballon-modal__metric ballon-modal__metric--bronze">
        <div class="ballon-modal__metric-val">${pStats.top3}</div>
        <div class="ballon-modal__metric-label">🥉 3º lugar</div>
      </div>
    </div>
    <table class="ballon-modal__table">
      <thead><tr><th>Ano</th><th>Posição</th></tr></thead>
      <tbody>${posRows}</tbody>
    </table>`;

  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeBallonModal() {
  const modal = document.getElementById('ballon-modal');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// ── Init ─────────────────────────────────────────────────────────────────────
function initBallonSection() {
  const select = document.getElementById('ballon-year-select');
  if (!select) return;

  ballonYears.forEach(y => {
    const opt = document.createElement('option');
    opt.value = y;
    opt.textContent = y === 2050 ? `${y} · em andamento` : String(y);
    if (y === 2050) opt.selected = true;
    select.appendChild(opt);
  });

  select.addEventListener('change', () => renderBallonSection(parseInt(select.value)));

  // Fechar modal
  document.getElementById('ballon-modal-close')?.addEventListener('click', closeBallonModal);
  document.getElementById('ballon-modal')?.addEventListener('click', e => {
    if (e.target === e.currentTarget) closeBallonModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeBallonModal();
  });

  renderBallonSection(2050);
}

document.addEventListener('DOMContentLoaded', initBallonSection);
