from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
PORT = 8080


class Utf8Handler(SimpleHTTPRequestHandler):
    extensions_map = {
        **SimpleHTTPRequestHandler.extensions_map,
        "": "application/octet-stream",
        ".html": "text/html; charset=utf-8",
        ".css": "text/css; charset=utf-8",
        ".js": "application/javascript; charset=utf-8",
        ".json": "application/json; charset=utf-8",
        ".svg": "image/svg+xml; charset=utf-8",
    }


def main():
    import os

    os.chdir(ROOT)
    server = ThreadingHTTPServer(("127.0.0.1", PORT), Utf8Handler)
    print(f"Servindo {ROOT} em http://127.0.0.1:{PORT}/ (UTF-8)")
    server.serve_forever()


if __name__ == "__main__":
    main()
