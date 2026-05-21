# Modo Carreira — Site de Estatísticas

Site estático (HTML, CSS e JavaScript) para documentar carreiras do EA FC no modo carreira: perfis de jogadores, passagens por clube/seleção, painel de campeões, Bola de Ouro e galeria.

---

## Como o site funciona

O navegador **não lê SQLite**. O fluxo é:

1. Você atualiza as fontes locais (planilhas/JSON/HTML de origem).
2. Os scripts Python consolidam tudo em `data/modo_carreira.sqlite`.
3. `scripts/exportar_frontend.py` gera os JSON em `assets/data/`.
4. O site carrega esses JSON com `fetch()` (home, perfis, clubes, dados e Bola de Ouro).

Arquivos consumidos pelo front:

- `assets/data/competicoes.json`
- `assets/data/bola-de-ouro.json`
- `assets/data/jogadores.json`
- `assets/data/index.json` (resumo da última exportação)

---

Guia detalhado (acessar, testar, nova temporada): **[GUIA.md](GUIA.md)**

---

## Atualizar uma nova temporada

Na raiz do projeto (`player-career-site`):

```bash
python scripts/build_dados.py
```

Esse comando roda, nesta ordem:

1. `gerar_base_campeoes.py`
2. `gerar_base_bola_de_ouro.py`
3. `gerar_base_jogadores.py`
4. `criar_banco_sqlite.py`
5. `exportar_frontend.py`

Depois, suba para o GitHub **apenas** o que o site precisa: HTML, CSS, JS, imagens e `assets/data/*.json`.

---

## Rodar localmente

Abrir o `index.html` com duplo clique pode bloquear `fetch()` por CORS. Use servidor local:

```bash
python scripts/serve_local.py
```

Use `serve_local.py` em vez de `python -m http.server` para enviar HTML/JSON com `charset=utf-8` (evita textos quebrados tipo `Ã§` no Windows).

Abra: [http://127.0.0.1:8080](http://127.0.0.1:8080)

Páginas úteis para QA:

- `index.html`
- `pages/galeria/dados.html`
- `pages/jogadores/garcia.html`
- `pages/clubes/garcia-oriente.html`

---

## Publicar no GitHub Pages

1. Envie o repositório para o GitHub.
2. Em **Settings → Pages**, use o branch `main` e a pasta raiz do site.
3. O site fica em `https://<usuario>.github.io/<repo>/`.

**Não precisa** publicar:

- `data/modo_carreira.sqlite`
- scripts Python
- planilhas `.xlsx` de trabalho (opcional no repo)

**Precisa** publicar os JSON em `assets/data/` sempre que atualizar os dados.

---

## Estrutura resumida

```
player-career-site/
├── index.html
├── pages/
│   ├── jogadores/
│   ├── clubes/
│   └── galeria/
├── assets/
│   ├── css/styles.css
│   ├── js/          # home, perfis, clubes, dados, bola-de-ouro
│   ├── data/        # JSON para o navegador
│   └── images/
├── data/            # SQLite e bases de origem (local)
└── scripts/         # pipeline de atualização
```

---

## Scripts auxiliares

| Script | Função |
|--------|--------|
| `build_dados.py` | Pipeline completo (recomendado) |
| `fix_encoding.py` | Corrige mojibake duplo nos HTML (`ComeÃ§o` → `Começo`) |
| `serve_local.py` | Servidor local com `charset=utf-8` (recomendado no Windows) |
| `inject_honor_utils.py` | Garante `honor-utils.js` nas páginas de jogador/clube |
| `exportar_frontend.py` | Só exporta JSON a partir do SQLite |

---

*Projeto pessoal. Dados coletados via Live Editor.*
