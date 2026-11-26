@echo off
cd /d "%~dp0"
if not exist node_modules (
  echo Instalando dependencias, espera 1-5 minutos y NO cierres esta ventana...
  call npm install --no-audit --no-fund
)
echo Abriendo MiBodega en http://localhost:8100 ...
echo Para detener la app presiona Ctrl+C en esta ventana.
call npx ng serve --port 8100 --open
pause
