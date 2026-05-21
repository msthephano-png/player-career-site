from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
HONOR_TAG = '<script src="../../assets/js/honor-utils.js?v=2"></script>'


def inject(path, script_name):
    text = path.read_text(encoding="utf-8")
    target = f'<script src="../../assets/js/{script_name}"></script>'
    if HONOR_TAG in text or target not in text:
        return False
    path.write_text(text.replace(target, f"{HONOR_TAG}\n  {target}"), encoding="utf-8", newline="\n")
    return True


def main():
    changed = []
    for path in (ROOT / "pages" / "jogadores").glob("*.html"):
        if inject(path, "player-profile.js"):
            changed.append(path)
    for path in (ROOT / "pages" / "clubes").glob("*.html"):
        if inject(path, "club-spell.js"):
            changed.append(path)

    for item in changed:
        print(item.relative_to(ROOT))


if __name__ == "__main__":
    main()
