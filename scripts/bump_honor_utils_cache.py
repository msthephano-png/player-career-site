from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

for folder in ("pages/jogadores", "pages/clubes"):
    for path in (ROOT / folder).glob("*.html"):
        text = path.read_text(encoding="utf-8")
        updated = text.replace(
            'src="../../assets/js/honor-utils.js"></script>',
            'src="../../assets/js/honor-utils.js?v=2"></script>',
        )
        if updated != text:
            path.write_text(updated, encoding="utf-8", newline="\n")
