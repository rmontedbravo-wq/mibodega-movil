@echo off
cd /d "%~dp0"
echo === INICIO %date% %time% === > compilar_log.txt
echo --- node --- >> compilar_log.txt
call node -v >> compilar_log.txt 2>&1
echo --- npm --- >> compilar_log.txt
call npm -v >> compilar_log.txt 2>&1
echo --- npm install --- >> compilar_log.txt
call npm install --no-audit --no-fund >> compilar_log.txt 2>&1
echo --- ng build --- >> compilar_log.txt
call npx ng build >> compilar_log.txt 2>&1
echo === FIN codigo %errorlevel% === >> compilar_log.txt
exit
