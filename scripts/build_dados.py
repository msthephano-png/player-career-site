import subprocess
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SCRIPTS_DIR = ROOT / "scripts"

PIPELINE = [
    "gerar_base_campeoes.py",
    "gerar_base_bola_de_ouro.py",
    "gerar_base_jogadores.py",
    "criar_banco_sqlite.py",
    "exportar_frontend.py",
]


def run_step(script_name):
    script_path = SCRIPTS_DIR / script_name
    print(f"\n==> {script_name}")
    subprocess.run([sys.executable, str(script_path)], cwd=ROOT, check=True)


def main():
    print("Atualizando dados do site (SQLite -> JSON)...")
    for script_name in PIPELINE:
        run_step(script_name)
    print("\nConcluido.")
    print(f"JSON gerados em: {ROOT / 'assets' / 'data'}")
    print("Teste local: python scripts/serve_local.py")


if __name__ == "__main__":
    main()
