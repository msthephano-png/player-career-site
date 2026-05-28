@echo off
echo Iniciando servidor local...
echo Acesse: http://localhost:8080
echo Para encerrar, feche esta janela.
echo.

python --version >nul 2>&1
if %errorlevel% == 0 (
    start "" "http://localhost:8080"
    python -m http.server 8080
) else (
    node --version >nul 2>&1
    if %errorlevel% == 0 (
        start "" "http://localhost:8080"
        npx serve . -p 8080
    ) else (
        echo ERRO: Python ou Node.js nao encontrado.
        echo Instale um dos dois e tente novamente.
        echo Python: https://www.python.org/downloads/
        pause
    )
)
pause
