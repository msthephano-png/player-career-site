from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TAG = '<script src="../../assets/js/honor-utils.js?v=2"></script>'

for folder in ("pages/jogadores", "pages/clubes"):
    for path in (ROOT / folder).glob("*.html"):
        text = path.read_text(encoding="utf-8")
        while text.count(TAG) > 1:
            text = text.replace(TAG, "", 1)
        if TAG not in text:
            text = text.replace(
                '<script src="../../assets/js/player-profile.js"></script>',
                f"{TAG}\n  <script src=\"../../assets/js/player-profile.js\"></script>",
            )
            text = text.replace(
                '<script src="../../assets/js/club-spell.js"></script>',
                f"{TAG}\n  <script src=\"../../assets/js/club-spell.js\"></script>",
            )
        path.write_text(text, encoding="utf-8", newline="\n")
