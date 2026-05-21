from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
TARGET_DIRS = [ROOT / "pages", ROOT / "index.html"]


def fix_text(value):
    if not any(token in value for token in ("Ã", "Â", "â€")):
        return value

    try:
        value = value.encode("latin1").decode("utf-8")
    except UnicodeError:
        pass

    return (
        value.replace("â€”", "—")
        .replace("â€“", "–")
        .replace("â€¢", "•")
        .replace("â€œ", """)
        .replace("â€\x9d", """)
        .replace("â€˜", "'")
        .replace("â€™", "'")
    )


def fix_file(path):
    original = path.read_text(encoding="utf-8-sig")
    fixed = fix_text(original)
    if fixed != original:
        path.write_text(fixed, encoding="utf-8", newline="\n")
        return True
    return False


def iter_targets():
    for target in TARGET_DIRS:
        if target.is_file():
            yield target
            continue
        for path in target.rglob("*.html"):
            yield path


def main():
    changed = []
    for path in iter_targets():
        if fix_file(path):
            changed.append(path.relative_to(ROOT))

    if changed:
        print("Arquivos corrigidos:")
        for item in changed:
            print(f"- {item}")
    else:
        print("Nenhum arquivo precisou de correcao.")


if __name__ == "__main__":
    main()
