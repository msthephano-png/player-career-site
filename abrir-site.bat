@echo off
echo Iniciando servidor local...
echo Acesse: http://localhost:8080
echo Para encerrar, feche esta janela.
echo.
start "" "http://localhost:8080"
python -m http.server 8080
pause
