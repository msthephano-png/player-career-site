from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
REPLACEMENTS = {
    'src="../../assets/js/player-profile.js"></script>': 'src="../../assets/js/player-profile.js?v=2"></script>',
    'src="../../assets/js/club-spell.js"></script>': 'src="../../assets/js/club-spell.js?v=2"></script>',
}

for folder in ("pages/jogadores", "pages/clubes"):
    for path in (ROOT / folder).glob("*.html"):
        text = path.read_text(encoding="utf-8")
        updated = text
        for old, new in REPLACEMENTS.items():
            updated = updated.replace(old, new)
        if updated != text:
            path.write_text(updated, encoding="utf-8", newline="\n")
