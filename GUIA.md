# Guia rápido — acessar, testar e atualizar temporada

Projeto: `player-career-site`  
Fluxo: **fontes locais → SQLite → JSON → site estático**

---

## Pré-requisitos

- Python 3 instalado
- Dependência: `openpyxl` (`pip install openpyxl`)
- Terminal aberto na pasta do projeto:

```powershell
cd "C:\Users\matheus\Documents\modo carreira\player-career-site"
```

---

## 1. Acessar o site no computador

Não abra o `index.html` com duplo clique (o navegador pode bloquear o `fetch` dos JSON).

```powershell
python scripts/serve_local.py
```

Abra no navegador: **http://127.0.0.1:8080**

| Página | URL |
|--------|-----|
| Home | http://127.0.0.1:8080/index.html |
| Dados / Bola de Ouro | http://127.0.0.1:8080/pages/galeria/dados.html |
| Perfil (ex.: Garcia) | http://127.0.0.1:8080/pages/jogadores/garcia.html |
| Passagem (ex.: Oriente) | http://127.0.0.1:8080/pages/clubes/garcia-oriente.html |

Para parar o servidor: `Ctrl+C` no terminal.

> Use `serve_local.py`, não `python -m http.server`, para acentos corretos no Windows.

---

## 2. Testar se está tudo certo

### Checklist visual

1. **Home** — números dos 6 jogadores (jogos, gols, assistências) batem com o esperado.
2. **Dados** — filtro abre em **2051** (temporada em andamento); ao mudar o ano, campeões aparecem.
3. **Bola de Ouro** (aba na mesma página) — anos até 2050 com ranking; 2051 como “votação aberta”.
4. **Perfil de jogador** — totais, passagens e cards de troféus com imagem.
5. **Página de clube** — tabela por competição, totais e troféus.

### Console do navegador

1. `F12` → aba **Console**
2. Recarregue a página (`Ctrl+F5` para limpar cache)
3. Não deve aparecer erro de `fetch` em:
   - `assets/data/jogadores.json`
   - `assets/data/competicoes.json`
   - `assets/data/bola-de-ouro.json`

### Conferir última exportação

Abra `assets/data/index.json` — o campo `summary` mostra quantos registros foram gerados na última rodada.

---

## 3. Atualizar uma nova temporada

Exemplo: fechar **2050** e começar **2051** (ou avançar 2051 → 2052).

### Passo A — Atualizar as fontes de dados

| O quê | Onde editar | Observação |
|-------|-------------|------------|
| **Campeões** (ligas, copas, seleções) | Planilha `data/campeoes_completo_ate_2050.xlsx` (abas usadas pelo SQLite) | Ou regenere via `gerar_base_campeoes.py` a partir da planilha em `Downloads` + `data/site-dados-extraidos.json` |
| **Bola de Ouro** | Ranking no fallback em `assets/js/bola-de-ouro.js` (`ballonData`) **ou** direto em `data/bola_de_ouro_ate_2050.json` | O pipeline lê o JS na geração da base |
| **Jogadores / passagens** | Páginas em `pages/jogadores/` e `pages/clubes/` **ou** `data/jogadores_carreiras.json` | `gerar_base_jogadores.py` lê os HTML e gera o JSON |

Inclua na fonte:

- Campeão de cada competição no **ano novo**
- Stats e troféus das **passagens** que mudaram
- Top 30 da **Bola de Ouro** do ano fechado (se aplicável)

### Passo B — Ajustar “temporada em andamento” no front

Quando o ano corrente do modo carreira mudar, atualize manualmente:

**`assets/js/dados.js`**

```javascript
const years = Array.from({ length: 26 }, (_, index) => 2026 + index); // aumente se passar de 2051
const state = { year: 2051, ... }; // ano que abre como padrão
// Em getStatusForYear: year === 2051 && competition.mode === "annual"
```

**`assets/js/bola-de-ouro.js`**

- Adicione o ano fechado em `ballonData` (lista de 30 jogadores)
- Deixe o ano novo como `null` (ex.: `2052: null`)
- Ajuste `ballonYears`, textos `2051 · Votação aberta` e `renderBallonSection(2051)` para o novo ano

**`pages/galeria/dados.html`** (texto explicativo do filtro, se mencionar o ano)

### Passo C — Regenerar SQLite e JSON

Um comando só:

```powershell
python scripts/build_dados.py
```

Ordem interna:

1. `gerar_base_campeoes.py`
2. `gerar_base_bola_de_ouro.py`
3. `gerar_base_jogadores.py`
4. `criar_banco_sqlite.py` → `data/modo_carreira.sqlite`
5. `exportar_frontend.py` → `assets/data/*.json`

### Passo D — Testar de novo

```powershell
python scripts/serve_local.py
```

Repita o checklist da seção 2.

### Passo E — Publicar no GitHub Pages

Suba para o repositório:

- `index.html`, `pages/`, `assets/` (CSS, JS, imagens, **`assets/data/*.json`**)

Não é obrigatório subir:

- `data/modo_carreira.sqlite`
- `scripts/`
- planilhas `.xlsx` de trabalho (opcional)

No GitHub: **Settings → Pages → branch `main` → pasta raiz**.

---

## 4. Comandos úteis (resumo)

| Situação | Comando |
|----------|---------|
| Ver o site localmente | `python scripts/serve_local.py` |
| Atualizar tudo após mudar dados | `python scripts/build_dados.py` |
| Só exportar JSON (SQLite já existe) | `python scripts/exportar_frontend.py` |
| Corrigir `Ã§`, `Ã£` nos HTML | `python scripts/fix_encoding.py` |

---

## 5. Fluxo em uma linha

```
Editar fontes → build_dados.py → serve_local.py → conferir → git push (com JSON)
```

---

## Problemas comuns

| Sintoma | Solução |
|---------|---------|
| Números não atualizam na home | `Ctrl+F5`; confira se `assets/data/jogadores.json` foi regenerado |
| `fetch` falhou / CORS | Use `serve_local.py`, não abra HTML direto |
| Acentos quebrados (`Ã§`) | `python scripts/fix_encoding.py` + `serve_local.py` |
| Troféus sem imagem | Recarregue com cache limpo; scripts devem incluir `honor-utils.js?v=2` |
| `gerar_base_campeoes` falha | Verifique o caminho da planilha em `scripts/gerar_base_campeoes.py` (linha `INPUT_XLSX`) |
