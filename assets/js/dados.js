const years = Array.from({ length: 21 }, (_, index) => 2026 + index);

const teamData = {
  "Flamengo": { logo: "../../assets/images/clubes/brazil-serie-a-2025-2026.football-logos.cc/256x256/flamengo.football-logos.cc.png", titles: { "Brasileirao": 12, "Copa do Brasil": 7, "Supercopa": 6, "Libertadores": 7, "Sul-Americana": 1, "Recopa": 4 } },
  "Palmeiras": { logo: "../../assets/images/clubes/brazil-serie-a-2025-2026.football-logos.cc/256x256/palmeiras.football-logos.cc.png", titles: { "Brasileirao": 14, "Copa do Brasil": 7, "Supercopa": 3, "Libertadores": 6, "Recopa": 3 } },
  "Gremio": { logo: "../../assets/images/clubes/brazil-serie-a-2025-2026.football-logos.cc/256x256/gremio.football-logos.cc.png", titles: { "Brasileirao": 4, "Copa do Brasil": 10, "Supercopa": 3, "Libertadores": 5, "Sul-Americana": 1, "Recopa": 5 } },
  "Vasco": { logo: "../../assets/images/clubes/brazil-serie-a-2025-2026.football-logos.cc/256x256/vasco-da-gama.football-logos.cc.png", titles: { "Brasileirao": 8, "Copa do Brasil": 3, "Supercopa": 4, "Libertadores": 6, "Recopa": 3 } },
  "Sao Paulo": { logo: "../../assets/images/clubes/brazil-serie-a-2025-2026.football-logos.cc/256x256/sao-paulo.football-logos.cc.png", titles: { "Brasileirao": 12, "Copa do Brasil": 5, "Supercopa": 6, "Libertadores": 6, "Sul-Americana": 2, "Recopa": 6 } },
  "Cruzeiro": { logo: "../../assets/images/clubes/brazil-serie-a-2025-2026.football-logos.cc/256x256/cruzeiro.football-logos.cc.png", titles: { "Brasileirao": 5, "Copa do Brasil": 8, "Supercopa": 1, "Libertadores": 2, "Sul-Americana": 1, "Recopa": 1 } },
  "Corinthians": { logo: "../../assets/images/clubes/brazil-serie-a-2025-2026.football-logos.cc/256x256/corinthians.football-logos.cc.png", titles: { "Brasileirao": 8, "Copa do Brasil": 5, "Supercopa": 3, "Libertadores": 1, "Sul-Americana": 1, "Recopa": 1 } },
  "Ceara": { logo: "../../assets/images/clubes/brazil-serie-a-2025-2026.football-logos.cc/256x256/cruzeiro.football-logos.cc.png", titles: { "Brasileirao": 1, "Supercopa": 1 } },
  "Santos": { logo: "../../assets/images/clubes/brazil-serie-a-2025-2026.football-logos.cc/256x256/santos.football-logos.cc.png", titles: { "Brasileirao": 8, "Copa do Brasil": 2, "Libertadores": 3, "Sul-Americana": 4, "Recopa": 2 } },
  "Botafogo": { logo: "../../assets/images/clubes/brazil-serie-a-2025-2026.football-logos.cc/256x256/botafogo.football-logos.cc.png", titles: { "Brasileirao": 2, "Libertadores": 1, "Sul-Americana": 1 } },
  "Fluminense": { logo: "../../assets/images/clubes/brazil-serie-a-2025-2026.football-logos.cc/256x256/fluminense.football-logos.cc.png", titles: { "Brasileirao": 4, "Copa do Brasil": 1, "Libertadores": 1, "Sul-Americana": 2, "Recopa": 1 } },
  "Internacional": { logo: "../../assets/images/clubes/brazil-serie-a-2025-2026.football-logos.cc/256x256/internacional.football-logos.cc.png", titles: { "Brasileirao": 3, "Copa do Brasil": 1, "Libertadores": 2, "Sul-Americana": 2, "Recopa": 2 } },
  "Atletico Mineiro": { logo: "../../assets/images/clubes/brazil-serie-a-2025-2026.football-logos.cc/256x256/atletico-mineiro.football-logos.cc.png", titles: { "Brasileirao": 3, "Copa do Brasil": 2, "Supercopa": 1, "Libertadores": 2, "Recopa": 2 } },
  "Bayern": { logo: "../../assets/images/clubes/germany-bundesliga-2025-2026.football-logos.cc/256x256/bayern-munchen.football-logos.cc.png", titles: { "Bundesliga": 50, "DFB Pokal": 37, "DFL Supercup": 27, "Champions League": 8 } },
  "Bayer Leverkusen": { logo: "../../assets/images/clubes/germany-bundesliga-2025-2026.football-logos.cc/256x256/bayer-leverkusen.football-logos.cc.png", titles: { "Bundesliga": 2, "DFB Pokal": 2, "DFL Supercup": 1 } },
  "RB Leipzig": { logo: "../../assets/images/clubes/germany-bundesliga-2025-2026.football-logos.cc/256x256/rb-leipzig.football-logos.cc.png", titles: { "Bundesliga": 1, "DFB Pokal": 2, "DFL Supercup": 1 } },
  "Frankfurt": { logo: "../../assets/images/clubes/germany-bundesliga-2025-2026.football-logos.cc/256x256/eintracht-frankfurt.football-logos.cc.png", titles: { "Bundesliga": 3, "DFB Pokal": 5, "DFL Supercup": 1, "Champions League": 1 } },
  "Borussia Dortmund": { logo: "../../assets/images/clubes/germany-bundesliga-2025-2026.football-logos.cc/256x256/borussia-dortmund.football-logos.cc.png", titles: { "Bundesliga": 9, "DFB Pokal": 8, "DFL Supercup": 8, "Champions League": 1 } },
  "Borussia Monchengladbach": { logo: "../../assets/images/clubes/germany-bundesliga-2025-2026.football-logos.cc/256x256/borussia-monchengladbach.football-logos.cc.png", titles: { "Bundesliga": 6, "DFB Pokal": 4, "DFL Supercup": 1 } },
  "Werder Bremen": { logo: "../../assets/images/clubes/germany-bundesliga-2025-2026.football-logos.cc/256x256/werder-bremen.football-logos.cc.png", titles: { "Bundesliga": 4, "DFB Pokal": 6 } },
  "Hamburgo": { logo: "../../assets/images/clubes/germany-bundesliga-2025-2026.football-logos.cc/256x256/hamburger-sv.football-logos.cc.png", titles: { "Bundesliga": 3 } },
  "Schalke 04": { logo: "../../assets/images/clubes/germany-2-bundesliga-2025-2026.football-logos.cc/256x256/schalke-04.football-logos.cc.png", titles: { "DFB Pokal": 5 } },
  "Liverpool": { logo: "../../assets/images/clubes/english-premier-league-2025-2026.football-logos.cc/256x256/liverpool.football-logos.cc.png", titles: { "Premier League": 24, "Carabao Cup": 13, "Community Shield": 17, "Champions League": 8 } },
  "Arsenal": { logo: "../../assets/images/clubes/english-premier-league-2025-2026.football-logos.cc/256x256/arsenal.football-logos.cc.png", titles: { "Premier League": 18, "Carabao Cup": 4, "FA Cup": 19, "Community Shield": 27, "Champions League": 1 } },
  "Manchester City": { logo: "../../assets/images/clubes/english-premier-league-2025-2026.football-logos.cc/256x256/manchester-city.football-logos.cc.png", titles: { "Premier League": 18, "Carabao Cup": 15, "FA Cup": 10, "Community Shield": 10, "Champions League": 3 } },
  "Chelsea": { logo: "../../assets/images/clubes/english-premier-league-2025-2026.football-logos.cc/256x256/chelsea.football-logos.cc.png", titles: { "Premier League": 7, "Carabao Cup": 6, "Champions League": 2, "Community Shield": 4 } },
  "Newcastle United": { logo: "../../assets/images/clubes/english-premier-league-2025-2026.football-logos.cc/256x256/newcastle.football-logos.cc.png", titles: { "Premier League": 4, "Carabao Cup": 3, "FA Cup": 6, "Emirates Cup": 2 } },
  "Aston Villa": { logo: "../../assets/images/clubes/english-premier-league-2025-2026.football-logos.cc/256x256/aston-villa.football-logos.cc.png", titles: { "Premier League": 7, "Carabao Cup": 6, "FA Cup": 7, "Emirates Cup": 1, "Community Shield": 2, "Champions League": 1 } },
  "Manchester United": { logo: "../../assets/images/clubes/english-premier-league-2025-2026.football-logos.cc/256x256/manchester-united.football-logos.cc.png", titles: { "Premier League": 20, "Carabao Cup": 7, "FA Cup": 15, "Emirates Cup": 2, "Community Shield": 22, "Champions League": 3 } },
  "Tottenham": { logo: "../../assets/images/clubes/english-premier-league-2025-2026.football-logos.cc/256x256/tottenham.football-logos.cc.png", titles: { "Premier League": 2, "Carabao Cup": 5, "FA Cup": 9, "Emirates Cup": 1, "Community Shield": 7 } },
  "Brighton": { logo: "../../assets/images/clubes/english-premier-league-2025-2026.football-logos.cc/256x256/brighton.football-logos.cc.png", titles: { "Carabao Cup": 1, "Emirates Cup": 2, "Community Shield": 3 } },
  "Nottingham Forest": { logo: "../../assets/images/clubes/english-premier-league-2025-2026.football-logos.cc/256x256/nottingham-forest.football-logos.cc.png", titles: { "Premier League": 1, "Carabao Cup": 5, "Champions League": 2, "Community Shield": 1 } },
  "Fulham": { logo: "../../assets/images/clubes/english-premier-league-2025-2026.football-logos.cc/256x256/fulham.football-logos.cc.png", titles: { "Emirates Cup": 1 } },
  "Crystal Palace": { logo: "../../assets/images/clubes/english-premier-league-2025-2026.football-logos.cc/256x256/crystal-palace.football-logos.cc.png", titles: { "Emirates Cup": 1, "Community Shield": 1 } },
  "Everton": { logo: "../../assets/images/clubes/english-premier-league-2025-2026.football-logos.cc/256x256/everton.football-logos.cc.png", titles: { "Community Shield": 9 } },
  "Napoli": { logo: "../../assets/images/clubes/italy-serie-a-2025-2026.football-logos.cc/256x256/napoli.football-logos.cc.png", titles: { "Serie A": 4, "Coppa Italia": 6, "Supercoppa Italiana": 5 } },
  "Inter": { logo: "../../assets/images/clubes/italy-serie-a-2025-2026.football-logos.cc/256x256/inter.football-logos.cc.png", titles: { "Serie A": 25, "Coppa Italia": 14, "Supercoppa Italiana": 10, "Champions League": 3 } },
  "Milan": { logo: "../../assets/images/clubes/italy-serie-a-2025-2026.football-logos.cc/256x256/milan.football-logos.cc.png", titles: { "Serie A": 21, "Coppa Italia": 7, "Supercoppa Italiana": 9, "Champions League": 7 } },
  "Bologna": { logo: "../../assets/images/clubes/italy-serie-a-2025-2026.football-logos.cc/256x256/bologna.football-logos.cc.png", titles: { "Serie A": 16, "Coppa Italia": 11, "Supercoppa Italiana": 12 } },
  "Juventus": { logo: "../../assets/images/clubes/italy-serie-a-2025-2026.football-logos.cc/256x256/juventus.football-logos.cc.png", titles: { "Serie A": 40, "Coppa Italia": 18, "Supercoppa Italiana": 11, "Champions League": 3 } },
  "Roma": { logo: "../../assets/images/clubes/italy-serie-a-2025-2026.football-logos.cc/256x256/roma.football-logos.cc.png", titles: { "Coppa Italia": 9 } },
  "Atletico de Madrid": { logo: "../../assets/images/clubes/spain-la-liga-2025-2026.football-logos.cc/256x256/atletico-madrid.football-logos.cc.png", titles: { "LaLiga": 15, "Copa del Rey": 14, "Supercopa da Espanha": 6 } },
  "Barcelona": { logo: "../../assets/images/clubes/spain-la-liga-2025-2026.football-logos.cc/256x256/barcelona.football-logos.cc.png", titles: { "LaLiga": 34, "Copa del Rey": 37, "Supercopa da Espanha": 20, "Champions League": 8 } },
  "Real Madrid": { logo: "../../assets/images/clubes/spain-la-liga-2025-2026.football-logos.cc/256x256/real-madrid.football-logos.cc.png", titles: { "LaLiga": 45, "Copa del Rey": 30, "Supercopa da Espanha": 23, "Champions League": 18 } },
  "Athletic Bilbao": { logo: "../../assets/images/clubes/spain-la-liga-2025-2026.football-logos.cc/256x256/athletic-club.football-logos.cc.png", titles: { "LaLiga": 8, "Copa del Rey": 24, "Supercopa da Espanha": 3 } },
  "Valencia": { logo: "../../assets/images/clubes/spain-la-liga-2025-2026.football-logos.cc/256x256/valencia.football-logos.cc.png", titles: { "LaLiga": 6, "Copa del Rey": 8 } },
  "Deportivo": { logo: "../../assets/images/clubes/spain-la-liga-2025-2026.football-logos.cc/256x256/deportivo.football-logos.cc.png", titles: { "Supercopa da Espanha": 3 } },
  "PSG": { logo: "../../assets/images/clubes/france-ligue-1-2025-2026.football-logos.cc/256x256/paris-saint-germain.football-logos.cc.png", titles: { "Ligue 1": 30, "Coupe de France": 30, "Supercopa da Franca": 29, "Champions League": 7 } },
  "Marseille": { logo: "../../assets/images/clubes/france-ligue-1-2025-2026.football-logos.cc/256x256/marseille.football-logos.cc.png", titles: { "Ligue 1": 13, "Coupe de France": 15, "Supercopa da Franca": 6, "Champions League": 1 } },
  "Saint-Etienne": { logo: "../../assets/images/clubes/france-ligue-1-2025-2026.football-logos.cc/256x256/paris-fc.football-logos.cc.png", titles: { "Ligue 1": 10, "Coupe de France": 6, "Supercopa da Franca": 5 } },
  "Monaco": { logo: "../../assets/images/clubes/france-ligue-1-2025-2026.football-logos.cc/256x256/as-monaco.football-logos.cc.png", titles: { "Ligue 1": 8, "Coupe de France": 5, "Supercopa da Franca": 4 } },
  "Nantes": { logo: "../../assets/images/clubes/france-ligue-1-2025-2026.football-logos.cc/256x256/nantes.football-logos.cc.png", titles: { "Ligue 1": 8, "Supercopa da Franca": 3 } },
  "Lille": { logo: "../../assets/images/clubes/france-ligue-1-2025-2026.football-logos.cc/256x256/lille.football-logos.cc.png", titles: { "Coupe de France": 6 } },
  "Boca Juniors": { logo: "../../assets/images/clubes/argentina-primera-division-2025-2026.football-logos.cc/256x256/boca-juniors.football-logos.cc.png", titles: { "Libertadores": 7, "Sul-Americana": 3, "Recopa": 6 } },
  "River Plate": { logo: "../../assets/images/clubes/argentina-primera-division-2025-2026.football-logos.cc/256x256/river-plate.football-logos.cc.png", titles: { "Libertadores": 6, "Sul-Americana": 3, "Recopa": 3 } },
  "Independiente": { logo: "../../assets/images/clubes/argentina-primera-division-2025-2026.football-logos.cc/256x256/independiente.football-logos.cc.png", titles: { "Libertadores": 7 } },
  "Barcelona de Guayaquil": { logo: "../../assets/images/clubes/argentina-primera-division-2025-2026.football-logos.cc/256x256/velez-sarsfield.football-logos.cc.png", titles: { "Sul-Americana": 1 } },
  "Velez Sarsfield": { logo: "../../assets/images/clubes/argentina-primera-division-2025-2026.football-logos.cc/256x256/velez-sarsfield.football-logos.cc.png", titles: { "Sul-Americana": 1, "Libertadores": 1 } },
  "Estudiantes": { logo: "../../assets/images/clubes/argentina-primera-division-2025-2026.football-logos.cc/256x256/estudiantes-de-la-plata.football-logos.cc.png", titles: { "Sul-Americana": 1, "Libertadores": 4 } },
  "Vitoria": { logo: "../../assets/images/clubes/brazil-serie-a-2025-2026.football-logos.cc/256x256/vitoria.football-logos.cc.png", titles: { "Sul-Americana": 1 } },
  "Spain": { logo: "../../assets/images/clubes/espanha.png", titles: { "Copa do Mundo": 3, "Eurocopa": 6 } },
  "Portugal": { logo: "../../assets/images/clubes/portugal.png", titles: { "Copa do Mundo": 1, "Eurocopa": 1 } },
  "Argentina": { logo: "../../assets/images/clubes/argentina.png", titles: { "Copa do Mundo": 4, "Copa America": 16 } },
  "Italy": { logo: "../../assets/images/clubes/italia.png", titles: { "Copa do Mundo": 5, "Eurocopa": 2 } },
  "Netherlands": { logo: "../../assets/images/clubes/holanda.png", titles: { "Eurocopa": 2 } },
  "France": { logo: "../../assets/images/clubes/frança.png", titles: { "Eurocopa": 4, "Copa do Mundo": 2 } },
  "Bolivia": { logo: "../../assets/images/clubes/bolivia.png", titles: { "Copa America": 2 } },
  "Chile": { logo: "../../assets/images/clubes/chile.png", titles: { "Copa America": 3 } },
  "Brazil": { logo: "../../assets/images/clubes/brasil.png", titles: { "Copa America": 12, "Copa do Mundo": 5 } },
  "Germany": { logo: "../../assets/images/clubes/fifa-world-cup-2026.football-logos.cc/256x256/germany-national-team.football-logos.cc.png", titles: { "Copa do Mundo": 4, "Eurocopa": 3 } },
  "Uruguay": { logo: "../../assets/images/clubes/fifa-world-cup-2026.football-logos.cc/256x256/uruguay-national-team.football-logos.cc.png", titles: { "Copa America": 15 } }
};

const competitions = [
  {
    id: "brasileirao",
    region: "Brasil",
    name: "Brasileirao",
    subtitle: "Liga nacional",
    accent: "#17b56d",
    mode: "annual",
    logo: "../../assets/images/icones/Campeonato_Brasileiro_Serie_A_logo_2024.png",
    winners: { 2026: "Palmeiras", 2027: "Flamengo", 2028: "Gremio", 2029: "Gremio", 2030: "Vasco", 2031: "Sao Paulo", 2032: "Sao Paulo", 2033: "Sao Paulo", 2034: "Sao Paulo", 2035: "Cruzeiro", 2036: "Palmeiras", 2037: "Flamengo", 2038: "Corinthians", 2039: "Flamengo", 2040: "Sao Paulo", 2041: "Ceara", 2042: "Vasco", 2043: "Vasco", 2044: "Vasco", 2045: "Sao Paulo" },
    top: [{ team: "Palmeiras", titles: 14 }, { team: "Flamengo", titles: 12 }, { team: "Sao Paulo", titles: 12 }, { team: "Santos", titles: 8 }, { team: "Corinthians", titles: 8 }, { team: "Vasco", titles: 8 }]
  },
  {
    id: "copa-brasil",
    region: "Brasil",
    name: "Copa do Brasil",
    subtitle: "Mata-mata nacional",
    accent: "#f1d064",
    mode: "annual",
    logo: "../../assets/images/icones/CopaDoBrasil.png",
    winners: { 2026: "Palmeiras", 2027: "Cruzeiro", 2028: "Gremio", 2029: "Palmeiras", 2030: "Vasco", 2031: "Flamengo", 2032: "Flamengo", 2033: "Palmeiras", 2034: "Gremio", 2035: "Sao Paulo", 2036: "Sao Paulo", 2037: "Sao Paulo", 2038: "Corinthians", 2039: "Sao Paulo", 2040: "Vasco", 2041: "Gremio", 2042: "Gremio", 2043: "Gremio", 2044: "Santos", 2045: "Cruzeiro" },
    top: [{ team: "Gremio", titles: 10 }, { team: "Cruzeiro", titles: 8 }, { team: "Flamengo", titles: 7 }, { team: "Palmeiras", titles: 7 }, { team: "Corinthians", titles: 5 }, { team: "Sao Paulo", titles: 5 }]
  },
  {
    id: "supercopa-br",
    region: "Brasil",
    name: "Supercopa do Brasil",
    subtitle: "Supercopa nacional",
    accent: "#65b9ff",
    mode: "annual",
    logo: "../../assets/images/icones/Supercopa_Rei_logo_(2023).png",
    winners: { 2026: "Corinthians", 2027: "Palmeiras", 2028: "Flamengo", 2029: "Gremio", 2030: "Gremio", 2031: "Vasco", 2032: "Sao Paulo", 2033: "Sao Paulo", 2034: "Sao Paulo", 2035: "Sao Paulo", 2036: "Cruzeiro", 2037: "Palmeiras", 2038: "Flamengo", 2039: "Corinthians", 2040: "Flamengo", 2041: "Sao Paulo", 2042: "Ceara", 2043: "Vasco", 2044: "Vasco", 2045: "Vasco" },
    top: [{ team: "Flamengo", titles: 6 }, { team: "Sao Paulo", titles: 6 }, { team: "Vasco", titles: 4 }, { team: "Palmeiras", titles: 3 }, { team: "Corinthians", titles: 3 }, { team: "Gremio", titles: 3 }]
  },
  {
    id: "bundesliga",
    region: "Alemanha",
    name: "Bundesliga",
    subtitle: "Elite alema",
    accent: "#ff5f5f",
    mode: "annual",
    logo: "../../assets/images/icones/Bundesliga_logo_(2017).png",
    winners: { 2026: "Bayern", 2027: "Bayern", 2028: "Bayern", 2029: "Bayer Leverkusen", 2030: "RB Leipzig", 2031: "Bayern", 2032: "Bayern", 2033: "Bayern", 2034: "Bayern", 2035: "Frankfurt", 2036: "Frankfurt", 2037: "Bayern", 2038: "Borussia Dortmund", 2039: "Bayern", 2040: "Bayern", 2041: "Borussia Monchengladbach", 2042: "Bayern", 2043: "Bayern", 2044: "Bayern", 2045: "Bayern" },
    top: [{ team: "Bayern", titles: 50 }, { team: "Borussia Dortmund", titles: 9 }, { team: "Borussia Monchengladbach", titles: 6 }, { team: "Werder Bremen", titles: 4 }, { team: "Hamburgo", titles: 3 }]
  },
  {
    id: "dfb-pokal",
    region: "Alemanha",
    name: "DFB Pokal",
    subtitle: "Copa nacional",
    accent: "#f2d266",
    mode: "annual",
    logo: "../../assets/images/icones/DFB-Pokal.jpeg",
    winners: { 2026: "Bayern", 2027: "Bayern", 2028: "Bayern", 2029: "Bayern", 2030: "Bayern", 2031: "Bayern", 2032: "Bayern", 2033: "Bayern", 2034: "Bayern", 2035: "Borussia Dortmund", 2036: "Borussia Dortmund", 2037: "Bayern", 2038: "Borussia Dortmund", 2039: "Bayern", 2040: "Bayern", 2041: "Bayern", 2042: "Bayern", 2043: "Bayern", 2044: "Borussia Monchengladbach", 2045: "Bayern" },
    top: [{ team: "Bayern", titles: 37 }, { team: "Borussia Dortmund", titles: 8 }, { team: "Werder Bremen", titles: 6 }, { team: "Schalke 04", titles: 5 }, { team: "Frankfurt", titles: 5 }]
  },
  {
    id: "supercup-de",
    region: "Alemanha",
    name: "DFL Supercup",
    subtitle: "Abertura da temporada",
    accent: "#78d5ff",
    mode: "annual",
    logo: "../../assets/images/icones/german super cup (1).jpg",
    winners: { 2026: "Bayern", 2027: "Bayern", 2028: "Bayern", 2029: "Bayern", 2030: "Bayern", 2031: "Bayern", 2032: "Bayern", 2033: "Bayern", 2034: "Bayern", 2035: "Bayern", 2036: "Frankfurt", 2037: "Borussia Dortmund", 2038: "Bayern", 2039: "Borussia Dortmund", 2040: "Bayern", 2041: "Bayern", 2042: "Borussia Monchengladbach", 2043: "Bayern", 2044: "Bayern", 2045: "Bayern" },
    top: [{ team: "Bayern", titles: 27 }, { team: "Borussia Dortmund", titles: 8 }, { team: "Borussia Monchengladbach", titles: 1 }, { team: "Frankfurt", titles: 1 }]
  },
  {
    id: "premier",
    region: "Inglaterra",
    name: "Premier League",
    subtitle: "Liga inglesa",
    accent: "#79d9ff",
    mode: "annual",
    logo: "../../assets/images/icones/premier.png",
    winners: { 2026: "Arsenal", 2027: "Arsenal", 2028: "Liverpool", 2029: "Arsenal", 2030: "Manchester City", 2031: "Chelsea", 2032: "Arsenal", 2033: "Manchester City", 2034: "Arsenal", 2035: "Liverpool", 2036: "Liverpool", 2037: "Manchester City", 2038: "Manchester City", 2039: "Manchester City", 2040: "Manchester City", 2041: "Manchester City", 2042: "Manchester City", 2043: "Manchester City", 2044: "Liverpool", 2045: "Arsenal" },
    top: [{ team: "Liverpool", titles: 24 }, { team: "Manchester United", titles: 20 }, { team: "Manchester City", titles: 18 }, { team: "Arsenal", titles: 18 }, { team: "Chelsea", titles: 7 }]
  },
  {
    id: "carabao",
    region: "Inglaterra",
    name: "Carabao Cup",
    subtitle: "Copa da liga",
    accent: "#8af56f",
    mode: "annual",
    logo: "../../assets/images/icones/carabao.png",
    winners: { 2026: "Arsenal", 2027: "Manchester City", 2028: "Aston Villa", 2029: "Newcastle United", 2030: "Liverpool", 2031: "Chelsea", 2032: "Manchester City", 2033: "Tottenham", 2034: "Brighton", 2035: "Manchester United", 2036: "Nottingham Forest", 2037: "Arsenal", 2038: "Manchester City", 2039: "Newcastle United", 2040: "Manchester City", 2041: "Liverpool", 2042: "Manchester City", 2043: "Manchester City", 2044: "Liverpool", 2045: "Manchester City" },
    top: [{ team: "Manchester City", titles: 15 }, { team: "Liverpool", titles: 13 }, { team: "Manchester United", titles: 7 }, { team: "Chelsea", titles: 6 }, { team: "Aston Villa", titles: 6 }, { team: "Tottenham", titles: 5 }, { team: "Nottingham Forest", titles: 5 }, { team: "Arsenal", titles: 4 }]
  },
  {
    id: "fa-cup",
    region: "Inglaterra",
    name: "FA Cup",
    subtitle: "Emirates Cup",
    accent: "#ff7b6b",
    mode: "annual",
    logo: "../../assets/images/icones/emiretes.png",
    winners: { 2026: "Manchester City", 2027: "Liverpool", 2028: "Arsenal", 2029: "Manchester United", 2030: "Newcastle United", 2031: "Chelsea", 2032: "Manchester City", 2033: "Aston Villa", 2034: "Liverpool", 2035: "Tottenham", 2036: "Arsenal", 2037: "Brighton", 2038: "Newcastle United", 2039: "Brighton", 2040: "Manchester United", 2041: "Fulham", 2042: "Manchester City", 2043: "Arsenal", 2044: "Arsenal", 2045: "Arsenal" },
    top: [{ team: "Arsenal", titles: 19 }, { team: "Manchester United", titles: 15 }, { team: "Manchester City", titles: 10 }, { team: "Liverpool", titles: 10 }, { team: "Chelsea", titles: 9 }, { team: "Tottenham", titles: 9 }]
  },
  {
    id: "community-shield",
    region: "Inglaterra",
    name: "Community Shield",
    subtitle: "Supercopa inglesa",
    accent: "#f5c96a",
    mode: "annual",
    logo: "../../assets/images/icones/efl_cup.png",
    winners: { 2026: "Crystal Palace", 2027: "Arsenal", 2028: "Arsenal", 2029: "Arsenal", 2030: "Arsenal", 2031: "Manchester City", 2032: "Arsenal", 2033: "Arsenal", 2034: "Aston Villa", 2035: "Arsenal", 2036: "Liverpool", 2037: "Arsenal", 2038: "Brighton", 2039: "Newcastle United", 2040: "Brighton", 2041: "Manchester United", 2042: "Manchester City", 2043: "Manchester City", 2044: "Arsenal", 2045: "Arsenal" },
    top: [{ team: "Arsenal", titles: 27 }, { team: "Manchester United", titles: 22 }, { team: "Liverpool", titles: 17 }, { team: "Manchester City", titles: 10 }, { team: "Everton", titles: 9 }]
  },
  {
    id: "serie-a",
    region: "Italia",
    name: "Serie A",
    subtitle: "Liga italiana",
    accent: "#63afff",
    mode: "annual",
    logo: "../../assets/images/icones/Serie_A_logo_2022.png",
    winners: { 2026: "Inter", 2027: "Inter", 2028: "Milan", 2029: "Inter", 2030: "Bologna", 2031: "Bologna", 2032: "Bologna", 2033: "Bologna", 2034: "Bologna", 2035: "Bologna", 2036: "Bologna", 2037: "Bologna", 2038: "Inter", 2039: "Juventus", 2040: "Juventus", 2041: "Juventus", 2042: "Inter", 2043: "Juventus", 2044: "Milan", 2045: "Inter" },
    top: [{ team: "Juventus", titles: 40 }, { team: "Inter", titles: 25 }, { team: "Milan", titles: 21 }, { team: "Bologna", titles: 16 }, { team: "Napoli", titles: 4 }]
  },
  {
    id: "coppa-italia",
    region: "Italia",
    name: "Coppa Italia",
    subtitle: "Copa nacional",
    accent: "#f0d06a",
    mode: "annual",
    logo: "../../assets/images/icones/coppa_italia.png",
    winners: { 2026: "Inter", 2027: "Inter", 2028: "Milan", 2029: "Inter", 2030: "Bologna", 2031: "Bologna", 2032: "Bologna", 2033: "Bologna", 2034: "Bologna", 2035: "Bologna", 2036: "Bologna", 2037: "Bologna", 2038: "Inter", 2039: "Juventus", 2040: "Juventus", 2041: "Inter", 2042: "Milan", 2043: "Juventus", 2044: "Inter", 2045: "Inter" },
    top: [{ team: "Juventus", titles: 18 }, { team: "Inter", titles: 14 }, { team: "Bologna", titles: 11 }, { team: "Roma", titles: 9 }, { team: "Milan", titles: 7 }]
  },
  {
    id: "supercoppa-it",
    region: "Italia",
    name: "Supercoppa Italiana",
    subtitle: "Abertura do calcio",
    accent: "#ff6e66",
    mode: "annual",
    logo: "../../assets/images/icones/Logo_EA_SPORTS_FC_SuperCup_2024-2025.jpg",
    winners: { 2026: "Napoli", 2027: "Inter", 2028: "Napoli", 2029: "Bologna", 2030: "Bologna", 2031: "Bologna", 2032: "Bologna", 2033: "Bologna", 2034: "Bologna", 2035: "Bologna", 2036: "Bologna", 2037: "Bologna", 2038: "Bologna", 2039: "Bologna", 2040: "Bologna", 2041: "Juventus", 2042: "Inter", 2043: "Milan", 2044: "Milan", 2045: "Juventus" },
    top: [{ team: "Bologna", titles: 12 }, { team: "Juventus", titles: 11 }, { team: "Inter", titles: 10 }, { team: "Milan", titles: 9 }, { team: "Napoli", titles: 5 }]
  },
  {
    id: "ligue-1",
    region: "Franca",
    name: "Ligue 1",
    subtitle: "Liga francesa",
    accent: "#5fb9ff",
    mode: "annual",
    logo: "../../assets/images/icones/ligue_1.png",
    winners: { 2026: "PSG", 2027: "PSG", 2028: "PSG", 2029: "Marseille", 2030: "PSG", 2031: "PSG", 2032: "PSG", 2033: "PSG", 2034: "PSG", 2035: "PSG", 2036: "PSG", 2037: "PSG", 2038: "PSG", 2039: "PSG", 2040: "PSG", 2041: "PSG", 2042: "PSG", 2043: "Marseille", 2044: "Marseille", 2045: "Marseille" },
    top: [{ team: "PSG", titles: 30 }, { team: "Marseille", titles: 13 }, { team: "Saint-Etienne", titles: 10 }, { team: "Monaco", titles: 8 }, { team: "Nantes", titles: 8 }]
  },
  {
    id: "coupe-france",
    region: "Franca",
    name: "Coupe de France",
    subtitle: "Copa francesa",
    accent: "#f4cf70",
    mode: "annual",
    logo: "../../assets/images/icones/Coupe_de_France_logo.png",
    winners: { 2026: "PSG", 2027: "PSG", 2028: "PSG", 2029: "Marseille", 2030: "Marseille", 2031: "Marseille", 2032: "Marseille", 2033: "PSG", 2034: "PSG", 2035: "PSG", 2036: "PSG", 2037: "PSG", 2038: "PSG", 2039: "PSG", 2040: "PSG", 2041: "PSG", 2042: "PSG", 2043: "PSG", 2044: "Marseille", 2045: "Marseille" },
    top: [{ team: "PSG", titles: 30 }, { team: "Marseille", titles: 15 }, { team: "Saint-Etienne", titles: 6 }, { team: "Lille", titles: 6 }, { team: "Monaco", titles: 5 }]
  },
  {
    id: "supercopa-fr",
    region: "Franca",
    name: "Supercopa da Franca",
    subtitle: "Trofeu dos campeoes",
    accent: "#8ad4ff",
    mode: "annual",
    logo: "../../assets/images/icones/Trophe_des_champions_2016.jpg",
    winners: { 2026: "PSG", 2027: "PSG", 2028: "PSG", 2029: "PSG", 2030: "Marseille", 2031: "PSG", 2032: "PSG", 2033: "PSG", 2034: "PSG", 2035: "PSG", 2036: "PSG", 2037: "PSG", 2038: "PSG", 2039: "PSG", 2040: "PSG", 2041: "PSG", 2042: "PSG", 2043: "PSG", 2044: "Marseille", 2045: "Marseille" },
    top: [{ team: "PSG", titles: 29 }, { team: "Marseille", titles: 6 }, { team: "Saint-Etienne", titles: 5 }, { team: "Monaco", titles: 4 }, { team: "Nantes", titles: 3 }]
  },
  {
    id: "laliga",
    region: "Espanha",
    name: "LaLiga",
    subtitle: "Liga espanhola",
    accent: "#ff7b63",
    mode: "annual",
    logo: "../../assets/images/icones/LaLiga_logo_2023.png",
    winners: { 2026: "Barcelona", 2027: "Real Madrid", 2028: "Real Madrid", 2029: "Real Madrid", 2030: "Barcelona", 2031: "Atletico de Madrid", 2032: "Atletico de Madrid", 2033: "Atletico de Madrid", 2034: "Real Madrid", 2035: "Barcelona", 2036: "Barcelona", 2037: "Barcelona", 2038: "Barcelona", 2039: "Barcelona", 2040: "Real Madrid", 2041: "Real Madrid", 2042: "Real Madrid", 2043: "Real Madrid", 2044: "Atletico de Madrid", 2045: "Real Madrid" },
    top: [{ team: "Real Madrid", titles: 45 }, { team: "Barcelona", titles: 34 }, { team: "Atletico de Madrid", titles: 15 }, { team: "Athletic Bilbao", titles: 8 }, { team: "Valencia", titles: 6 }]
  },
  {
    id: "copa-rey",
    region: "Espanha",
    name: "Copa del Rey",
    subtitle: "Copa do rei",
    accent: "#f2d16c",
    mode: "annual",
    logo: "../../assets/images/icones/Copa_Del_Rey_Official_Logo.png",
    winners: { 2026: "Atletico de Madrid", 2027: "Real Madrid", 2028: "Real Madrid", 2029: "Real Madrid", 2030: "Real Madrid", 2031: "Atletico de Madrid", 2032: "Atletico de Madrid", 2033: "Atletico de Madrid", 2034: "Atletico de Madrid", 2035: "Barcelona", 2036: "Barcelona", 2037: "Barcelona", 2038: "Barcelona", 2039: "Real Madrid", 2040: "Real Madrid", 2041: "Real Madrid", 2042: "Real Madrid", 2043: "Real Madrid", 2044: "Barcelona", 2045: "Real Madrid" },
    top: [{ team: "Barcelona", titles: 37 }, { team: "Real Madrid", titles: 30 }, { team: "Athletic Bilbao", titles: 24 }, { team: "Atletico de Madrid", titles: 14 }, { team: "Valencia", titles: 8 }]
  },
  {
    id: "supercopa-es",
    region: "Espanha",
    name: "Supercopa da Espanha",
    subtitle: "Supercopa espanhola",
    accent: "#7ac8ff",
    mode: "annual",
    logo: "../../assets/images/icones/Supercopa_de_Espana_Logo.png",
    winners: { 2026: "Barcelona", 2027: "Real Madrid", 2028: "Real Madrid", 2029: "Real Madrid", 2030: "Real Madrid", 2031: "Real Madrid", 2032: "Atletico de Madrid", 2033: "Atletico de Madrid", 2034: "Atletico de Madrid", 2035: "Atletico de Madrid", 2036: "Barcelona", 2037: "Barcelona", 2038: "Barcelona", 2039: "Real Madrid", 2040: "Real Madrid", 2041: "Real Madrid", 2042: "Real Madrid", 2043: "Real Madrid", 2044: "Real Madrid", 2045: "Real Madrid" },
    top: [{ team: "Real Madrid", titles: 23 }, { team: "Barcelona", titles: 20 }, { team: "Atletico de Madrid", titles: 6 }, { team: "Athletic Bilbao", titles: 3 }, { team: "Deportivo", titles: 3 }]
  },
  {
    id: "champions",
    region: "Europa",
    name: "Champions League",
    subtitle: "Continente europeu",
    accent: "#71a7ff",
    mode: "annual",
    logo: "../../assets/images/icones/Logo_UEFA_Champions_League.png",
    winners: { 2026: "Barcelona", 2027: "Bayern", 2028: "Arsenal", 2029: "Liverpool", 2030: "Barcelona", 2031: "PSG", 2032: "PSG", 2033: "PSG", 2034: "Manchester City", 2035: "Manchester City", 2036: "Frankfurt", 2037: "PSG", 2038: "Barcelona", 2039: "PSG", 2040: "Real Madrid", 2041: "PSG", 2042: "Real Madrid", 2043: "Juventus", 2044: "Bayern", 2045: "Real Madrid" },
    top: [{ team: "Real Madrid", titles: 18 }, { team: "Bayern", titles: 8 }, { team: "Liverpool", titles: 8 }, { team: "Barcelona", titles: 8 }, { team: "Milan", titles: 7 }, { team: "PSG", titles: 7 }]
  },
  {
    id: "libertadores",
    region: "America do Sul",
    name: "Libertadores",
    subtitle: "Continente sul-americano",
    accent: "#f0d06a",
    mode: "annual",
    logo: "../../assets/images/icones/Conmebol_Libertadores_logo.png",
    winners: { 2026: "River Plate", 2027: "River Plate", 2028: "Gremio", 2029: "Boca Juniors", 2030: "Vasco", 2031: "Flamengo", 2032: "Palmeiras", 2033: "Flamengo", 2034: "Atletico Mineiro", 2035: "Sao Paulo", 2036: "Palmeiras", 2037: "Flamengo", 2038: "Sao Paulo", 2039: "Sao Paulo", 2040: "Palmeiras", 2041: "Vasco", 2042: "Vasco", 2043: "Gremio", 2044: "Vasco", 2045: "Vasco" },
    top: [{ team: "Independiente", titles: 7 }, { team: "Boca Juniors", titles: 7 }, { team: "Flamengo", titles: 7 }, { team: "Vasco", titles: 6 }, { team: "Palmeiras", titles: 6 }, { team: "Sao Paulo", titles: 6 }, { team: "River Plate", titles: 6 }, { team: "Gremio", titles: 5 }]
  },
  {
    id: "sudamericana",
    region: "America do Sul",
    name: "Sul-Americana",
    subtitle: "Copa continental",
    accent: "#6bd0ff",
    mode: "annual",
    logo: "../../assets/images/icones/Conmebol_Sudamericana_logo.png",
    winners: { 2026: "Boca Juniors", 2027: "Gremio", 2028: "River Plate", 2029: "Santos", 2030: "Flamengo", 2031: "Cruzeiro", 2032: "Santos", 2033: "Sao Paulo", 2034: "Santos", 2035: "Santos", 2036: "Internacional", 2037: "Botafogo", 2038: "Fluminense", 2039: "Corinthians", 2040: "River Plate", 2041: "Barcelona de Guayaquil", 2042: "Velez Sarsfield", 2043: "Estudiantes", 2044: "Fluminense", 2045: "Vitoria" },
    top: [{ team: "Santos", titles: 4 }, { team: "Boca Juniors", titles: 3 }, { team: "River Plate", titles: 3 }, { team: "Fluminense", titles: 2 }, { team: "Sao Paulo", titles: 2 }, { team: "Internacional", titles: 2 }]
  },
  {
    id: "recopa",
    region: "America do Sul",
    name: "Recopa Sul-Americana",
    subtitle: "Superfinal continental",
    accent: "#8fe987",
    mode: "annual",
    logo: "../../assets/images/icones/Conmebol_Recopa_logo_(after_2017).png",
    winners: { 2027: "Boca Juniors", 2028: "Gremio", 2029: "Gremio", 2030: "Boca Juniors", 2031: "Flamengo", 2032: "Flamengo", 2033: "Santos", 2034: "Sao Paulo", 2035: "Atletico Mineiro", 2036: "Sao Paulo", 2037: "Palmeiras", 2038: "Flamengo", 2039: "Sao Paulo", 2040: "Sao Paulo", 2041: "Palmeiras", 2042: "Vasco", 2043: "Vasco", 2044: "Gremio", 2045: "Vasco" },
    top: [{ team: "Boca Juniors", titles: 6 }, { team: "Sao Paulo", titles: 6 }, { team: "Gremio", titles: 5 }, { team: "Flamengo", titles: 4 }, { team: "River Plate", titles: 3 }, { team: "Vasco", titles: 3 }, { team: "Palmeiras", titles: 3 }]
  },
  {
    id: "world-cup",
    region: "Selecoes",
    name: "Copa do Mundo",
    subtitle: "Selecoes nacionais",
    accent: "#f4cf6a",
    mode: "periodic",
    logo: "../../assets/images/icones/copa_do_mundo.png",
    winners: { 2026: "Spain", 2030: "Spain", 2034: "Portugal", 2038: "Argentina", 2042: "Italy" },
    top: [{ team: "Brazil", titles: 5 }, { team: "Italy", titles: 5 }, { team: "Germany", titles: 4 }, { team: "Argentina", titles: 4 }, { team: "Spain", titles: 3 }, { team: "France", titles: 2 }]
  },
  {
    id: "euro",
    region: "Selecoes",
    name: "Eurocopa",
    subtitle: "Principal torneio europeu",
    accent: "#6fb6ff",
    mode: "periodic",
    logo: "../../assets/images/icones/eurocopa.png",
    winners: { 2028: "Spain", 2032: "Spain", 2036: "Netherlands", 2040: "France", 2044: "France" },
    top: [{ team: "Spain", titles: 6 }, { team: "France", titles: 4 }, { team: "Germany", titles: 3 }, { team: "Italy", titles: 2 }, { team: "Netherlands", titles: 2 }]
  },
  {
    id: "copa-america",
    region: "Selecoes",
    name: "Copa America",
    subtitle: "Principal torneio sul-americano",
    accent: "#7bd989",
    mode: "periodic",
    logo: "../../assets/images/icones/copa_america.png",
    winners: { 2028: "Bolivia", 2032: "Chile", 2036: "Brazil", 2040: "Brazil", 2044: "Brazil" },
    top: [{ team: "Argentina", titles: 16 }, { team: "Uruguay", titles: 15 }, { team: "Brazil", titles: 12 }, { team: "Chile", titles: 3 }, { team: "Bolivia", titles: 2 }]
  }
];

const regionDescriptions = {
  "Brasil": "As tres competicoes centrais do calendario brasileiro, com leitura por temporada e maiores vencedores.",
  "Alemanha": "Campeoes da elite alema, copa nacional e supercopa.",
  "Inglaterra": "Liga, copas e supercopa em um bloco premium para navegar ano a ano.",
  "Italia": "O recorte completo do calcio em tom escuro e leitura limpa.",
  "Franca": "Historico moderno da Franca com dominio recente e alternancias pontuais.",
  "Espanha": "LaLiga, Copa del Rey e Supercopa com foco em Real, Barca e Atleti.",
  "Europa": "A orelhuda concentrada em um painel unico de campeoes continentais.",
  "America do Sul": "Libertadores, Sul-Americana e Recopa reunidas em um bloco de peso sul-americano.",
  "Selecoes": "Grandes torneios de selecoes exibidos apenas quando o ano selecionado tem edicao."
};

const state = {
  year: 2046,
  competitionId: "brasileirao",
  modalTeam: null
};

const yearSelect = document.getElementById("year-select");
const regionsRoot = document.getElementById("regions-root");
const detailRoot = document.getElementById("detail-root");
const modalRoot = document.getElementById("team-modal");
const modalIdentity = document.getElementById("team-modal-identity");
const modalTitles = document.getElementById("team-modal-titles");
const modalClose = document.getElementById("team-modal-close");

years.slice().reverse().forEach((year) => {
  const option = document.createElement("option");
  option.value = String(year);
  option.textContent = String(year);
  if (year === state.year) option.selected = true;
  yearSelect.appendChild(option);
});

yearSelect.addEventListener("change", () => {
  state.year = Number(yearSelect.value);
  ensureSelectedCompetitionIsVisible();
  render();
});

modalClose.addEventListener("click", closeTeamModal);
modalRoot.addEventListener("click", (event) => {
  if (event.target === modalRoot) closeTeamModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeTeamModal();
});

function ensureSelectedCompetitionIsVisible() {
  const visible = getVisibleCompetitions();
  const isCurrentVisible = visible.some((competition) => competition.id === state.competitionId);
  if (!isCurrentVisible && visible.length > 0) {
    state.competitionId = visible[0].id;
  }
}

function getVisibleCompetitions() {
  return competitions.filter((competition) => getStatusForYear(competition, state.year) !== null);
}

function getStatusForYear(competition, year) {
  if (competition.winners[year]) {
    return { label: competition.winners[year], live: false };
  }
  if (year === 2046 && competition.mode === "annual") {
    return { label: "Em andamento", live: true };
  }
  return null;
}

function buildTeamMark(teamName) {
  const team = teamData[teamName] || {};
  if (team.logo) {
    return `
      <div class="team-mark">
        <img src="${team.logo}" alt="${teamName}">
      </div>
    `;
  }

  const initials = teamName
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 3);

  return `
    <div class="team-mark">
      <span class="team-mark__fallback">${initials}</span>
    </div>
  `;
}

function renderRegions() {
  const grouped = competitions.reduce((accumulator, competition) => {
    const status = getStatusForYear(competition, state.year);
    if (!status) return accumulator;
    if (!accumulator[competition.region]) accumulator[competition.region] = [];
    accumulator[competition.region].push({ competition, status });
    return accumulator;
  }, {});

  regionsRoot.innerHTML = Object.entries(grouped)
    .map(([region, items]) => {
      const cards = items
        .map(({ competition, status }) => `
          <button
            class="competition-card ${state.competitionId === competition.id ? "is-active" : ""}"
            style="--comp-accent:${competition.accent};"
            data-competition-id="${competition.id}"
            type="button"
          >
            <div class="competition-card__logo">
              <img src="${competition.logo}" alt="${competition.name}">
            </div>
            <h3 class="competition-card__name">${competition.name}</h3>
            <div class="competition-card__meta">${competition.subtitle}</div>
            <div class="competition-card__status ${status.live ? "is-live" : ""}">
              <span class="competition-card__status-dot"></span>
              <span>${status.live ? "2046" : state.year} • ${status.label}</span>
            </div>
          </button>
        `)
        .join("");

      return `
        <article class="region-panel">
          <div class="region-panel__top">
            <div class="region-panel__copy">
              <div class="section__eyebrow">${region}</div>
              <h3 class="section__title">${region}</h3>
              <p>${regionDescriptions[region]}</p>
            </div>
            <div class="region-panel__badge">${items.length} competicoes visiveis</div>
          </div>
          <div class="competition-grid">${cards}</div>
        </article>
      `;
    })
    .join("");

  regionsRoot.querySelectorAll("[data-competition-id]").forEach((button) => {
    button.addEventListener("click", () => {
      state.competitionId = button.getAttribute("data-competition-id");
      render();
      detailRoot.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function renderDetail() {
  const competition = competitions.find((item) => item.id === state.competitionId) || competitions[0];
  const status = getStatusForYear(competition, state.year);
  const historyYears = Object.keys(competition.winners)
    .map(Number)
    .sort((a, b) => b - a);

  const topMarkup = competition.top
    .map(({ team, titles }) => `
      <button class="champion-button" type="button" data-team-name="${team}">
        <div class="champion-button__team">
          ${buildTeamMark(team)}
          <span>${team}</span>
        </div>
        <span class="champion-button__count">${titles}x</span>
      </button>
    `)
    .join("");

  const historyMarkup = historyYears
    .map((year) => `
      <div class="history-item">
        <span class="history-item__year">${year}</span>
        <span class="history-item__team">${competition.winners[year]}</span>
      </div>
    `)
    .join("");

  const selectedChampionBlock = status
    ? status.live
      ? `<div class="status-chip"><span class="competition-card__status-dot" style="--comp-accent:${competition.accent}; background:${competition.accent};"></span><strong>2046</strong><span>Em andamento</span></div>`
      : `<button class="status-chip" type="button" data-team-name="${status.label}"><span class="competition-card__status-dot" style="--comp-accent:${competition.accent}; background:${competition.accent};"></span><strong>${state.year}</strong><span>${status.label}</span></button>`
    : `<div class="empty-message">Nao houve edicao desta competicao no ano selecionado.</div>`;

  detailRoot.innerHTML = `
    <div class="detail-hero">
      <div class="detail-hero__logo">
        <img src="${competition.logo}" alt="${competition.name}">
      </div>
      <div>
        <div class="section__eyebrow">${competition.region}</div>
        <h3 class="section__title">${competition.name}</h3>
        <p class="section__copy">${competition.subtitle}. O ranking abaixo considera os maiores campeoes totais e o historico mostra a linha completa da simulacao.</p>
        <div class="detail-hero__meta">${selectedChampionBlock}</div>
      </div>
    </div>

    <div class="detail-grid">
      <article class="detail-card">
        <h3>Maiores campeoes</h3>
        <div class="champions-list">${topMarkup}</div>
      </article>
      <article class="detail-card">
        <h3>Historico da simulacao</h3>
        <div class="history-list">${historyMarkup}</div>
      </article>
    </div>
  `;

  detailRoot.querySelectorAll("[data-team-name]").forEach((button) => {
    button.addEventListener("click", () => openTeamModal(button.getAttribute("data-team-name")));
  });
}

function openTeamModal(teamName) {
  const data = teamData[teamName] || { titles: {} };
  const titleEntries = Object.entries(data.titles || {}).sort((a, b) => b[1] - a[1]);

  modalIdentity.innerHTML = `
    ${buildTeamMark(teamName)}
    <div>
      <div class="section__eyebrow">Titulos principais</div>
      <h3 class="section__title">${teamName}</h3>
      <p class="section__copy">Leitura resumida dos trofeus centrais desse clube ou selecao no universo do seu modo carreira.</p>
    </div>
  `;

  modalTitles.innerHTML = titleEntries.length
    ? titleEntries
        .map(([titleName, total]) => `
          <div class="title-item">
            <span>${titleName}</span>
            <span class="title-item__count">${total}x</span>
          </div>
        `)
        .join("")
    : `<div class="empty-message">Esse clube aparece no ranking, mas ainda nao recebeu detalhamento manual de titulos principais.</div>`;

  modalRoot.classList.add("is-open");
  modalRoot.setAttribute("aria-hidden", "false");
}

function closeTeamModal() {
  modalRoot.classList.remove("is-open");
  modalRoot.setAttribute("aria-hidden", "true");
}

function render() {
  renderRegions();
  renderDetail();
}

ensureSelectedCompetitionIsVisible();
render();
