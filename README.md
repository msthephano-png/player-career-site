# 🏆 Modo Carreira Cinematic

> Uma vitrine premium para acompanhar a jornada completa dos seus craques no FIFA/FC Modo Carreira.  
> Visual escuro, cinematográfico e elegante — com cara de projeto AAA.

---

## ✨ Funcionalidades

- **Hub de Jogadores** — Perfis individuais com stats, clubes, títulos e prêmios
- **Páginas de Clubes** — Detalhamento por passagem: jogos, gols, assistências e troféus conquistados
- **Área de Dados** — Painel interativo com filtro por temporada, ligas e rankings de campeões
- **Galeria de Highlights** — Timeline visual com lightbox para os melhores momentos da carreira
- Design 100% responsivo, tema dark cinematográfico

---

## 🗂 Estrutura do Projeto

```
site-carreiras/
│
├── index.html                  # Página principal (seleção de jogadores)
├── README.md
│
├── pages/
│   ├── jogadores/              # Hubs individuais de cada jogador
│   │   ├── garcia.html
│   │   ├── fonseca.html
│   │   ├── escobar.html
│   │   ├── salazar.html
│   │   ├── guarita-fonseca.html
│   │   └── moreno-escobar.html
│   │
│   ├── clubes/                 # Páginas de passagem por clube
│   │   ├── escobar-vasco.html
│   │   ├── escobar-bayern.html
│   │   ├── escobar-barca.html
│   │   ├── escobar-psg.html
│   │   ├── escobar-gremio.html
│   │   ├── escobar-bolivia.html
│   │   ├── fonseca-vasco.html
│   │   ├── fonseca-city.html
│   │   ├── fonseca-milan.html
│   │   ├── fonseca-bayern.html
│   │   ├── fonseca-bolivia.html
│   │   ├── garcia-vasco.html
│   │   ├── garcia-psg.html
│   │   ├── garcia-oriente.html
│   │   ├── garcia-bolivia.html
│   │   ├── salazar-oriente.html
│   │   └── salazar-bolivia.html
│   │
│   └── galeria/                # Seções especiais
│       ├── galeria.html        # Galeria de highlights
│       └── dados.html          # Painel de dados e estatísticas
│
├── assets/
│   ├── css/
│   │   └── styles.css          # Estilos globais (tema dark cinematográfico)
│   │
│   ├── js/
│   │   ├── dados.js            # Lógica da área de dados / ligas
│   │   └── galeria.js          # Lógica da galeria de imagens
│   │
│   └── images/
│       ├── jogadores/          # Fotos dos jogadores (olhos abertos/fechados + destaque)
│       ├── clubes/             # Escudos de clubes e seleções
│       ├── titulos/            # Imagens dos troféus coletivos
│       ├── premios/            # Imagens dos prêmios individuais
│       ├── icones/             # Logos de ligas e competições
│       └── galeria/            # Screenshots e highlights do gameplay
│
└── data/                       # Reservado para dados externos (JSON, etc.)
```

---

## 🚀 Como Usar

### Localmente

Basta abrir o `index.html` em qualquer navegador moderno.  
Ou use um servidor local para evitar restrições de CORS:

```bash
# Com Python
python3 -m http.server 8080

# Com Node.js (npx)
npx serve .
```

Acesse em: `http://localhost:8080`

### GitHub Pages

1. Suba o conteúdo desta pasta para um repositório GitHub
2. Vá em **Settings → Pages**
3. Selecione o branch `main` e a pasta raiz `/`
4. O site ficará disponível em `https://seu-usuario.github.io/nome-do-repo/`

---

## 🧭 Navegação do Site

```
index.html
  ↓
pages/jogadores/{jogador}.html       ← Hub do jogador
  ↓
pages/clubes/{jogador}-{clube}.html  ← Detalhes da passagem
  
pages/galeria/galeria.html           ← Galeria visual
pages/galeria/dados.html             ← Painel de dados
```

---

## 🛠 Tecnologias

- HTML5 semântico
- CSS3 puro (variáveis, animações, grid/flexbox)
- JavaScript vanilla (sem frameworks)
- 100% estático — sem backend, sem dependências externas

---

## 📁 Convenções de Imagens

| Pasta | Conteúdo |
|---|---|
| `images/jogadores/` | Retratos dos jogadores (`_oa` = olhos abertos, `_of` = olhos fechados, `fotinha` = destaque) |
| `images/clubes/` | Escudos de times e seleções nacionais |
| `images/titulos/` | Troféus de campeonatos e copas |
| `images/premios/` | Artes de prêmios individuais (`best_`, `art_`, `arti_`) |
| `images/icones/` | Logos oficiais de ligas e competições |
| `images/galeria/` | Screenshots numerados por data do gameplay |

---

## 🔮 Expansões Futuras

- [ ] Seção de Bolas de Ouro (estrutura já reservada em `dados.html`)
- [ ] Novos jogadores (basta criar `pages/jogadores/{nome}.html` + clubes em `pages/clubes/`)
- [ ] Dados em JSON externo (`data/`)
- [ ] Modo comparação entre jogadores

---

*Projeto pessoal — Modo Carreira Cinematic*
