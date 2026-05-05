# Modo Carreira — Site de Estatísticas

Um site estático para acompanhar, registrar e visualizar a carreira dos jogadores do meu Modo Carreira no EA FC.

---

## O problema que isso resolve

O EA FC não oferece nenhuma forma nativa de armazenar ou visualizar estatísticas do Modo Carreira ao longo das temporadas. Os dados simplesmente não ficam registrados em lugar nenhum. A consequência prática disso é que a carreira perde profundidade com o tempo — sem histórico, sem contexto, sem narrativa — e acaba sendo abandonada depois de duas ou três temporadas por falta de engajamento.

Esse site resolve isso. Os dados são coletados manualmente pelo Live Editor durante as partidas e inseridos aqui, criando um registro permanente da trajetória de cada jogador: clubes, títulos, prêmios, estatísticas por temporada e galeria de momentos.

A ideia é simples: transformar o Modo Carreira em algo que valha a pena acompanhar a longo prazo.

---

## O que tem no site

**Perfis de jogadores** — Cada jogador tem sua própria página com a carreira completa, passagens por clube, títulos conquistados e prêmios individuais recebidos.

**Páginas por clube** — Cada passagem tem sua própria página com estatísticas daquela temporada específica: jogos, gols, assistências e troféus.

**Painel de dados** — Visão geral por liga e por temporada, com ranking de campeões e filtros interativos.

**Bola de Ouro** — Ranking dos 30 melhores jogadores de cada temporada (2026–2046, com 2047 em andamento), com pódio visual, histórico de indicações e estatísticas por jogador.

**Galeria** — Screenshots das melhores cenas da carreira, com lightbox.

---

## Estrutura do projeto

```
site-carreiras/
│
├── index.html
├── README.md
│
├── pages/
│   ├── jogadores/        # Perfis individuais
│   ├── clubes/           # Páginas de passagem por clube
│   └── galeria/
│       ├── galeria.html  # Galeria de imagens
│       └── dados.html    # Painel de dados e Bola de Ouro
│
├── assets/
│   ├── css/styles.css
│   ├── js/
│   │   ├── dados.js
│   │   ├── galeria.js
│   │   └── bola-de-ouro.js
│   └── images/
│       ├── jogadores/
│       ├── clubes/       # Escudos (pacotes por liga)
│       ├── titulos/
│       ├── premios/
│       ├── icones/       # Logos de ligas e competições
│       ├── bandeiras/    # Bandeiras de países (para uso futuro)
│       ├── galeria/
│       └── bola-de-ouro/ # Fotos dos vencedores por ano (2026–2046)
│
└── data/                 # Reservado para dados em JSON
```

---

## Como rodar localmente

Abra o `index.html` diretamente no navegador. Para evitar restrições de CORS com os arquivos JS:

```bash
# Python
python3 -m http.server 8080

# Node
npx serve .
```

---

## Deploy no GitHub Pages

1. Suba a pasta para um repositório no GitHub
2. Vá em Settings > Pages
3. Selecione o branch `main` e a pasta raiz
4. O site fica disponível em `https://seu-usuario.github.io/nome-do-repo/`

---

## Tecnologias

HTML, CSS e JavaScript puros. Sem frameworks, sem backend, sem dependências externas.

---

## Estado atual e planos

O site é estático. Todos os dados são inseridos manualmente no código. Não há banco de dados nem sistema de login.

No futuro, a ideia é criar uma versão onde qualquer pessoa possa criar uma conta, inserir os dados da própria carreira e ter seu próprio site gerado automaticamente — tornando a ferramenta útil para qualquer jogador que enfrente o mesmo problema. Por enquanto, o projeto fica aqui aberto caso alguém queira se inspirar ou adaptar para a sua própria carreira.

---

*Projeto pessoal, feito por hobbie. Dados coletados via Live Editor.*
