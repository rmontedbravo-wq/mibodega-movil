#!/usr/bin/env bash
echo "==== Verificando entorno MiBodega ===="
echo -n "Node:      "; node -v
echo -n "npm:       "; npm -v
echo -n "Git:       "; git --version
echo -n "Ionic CLI: "; ionic -v
echo -n "ADB:       "; adb --version | head -n1
echo -n "Java:      "; java -version 2>&1 | head -n1
echo "======================================"
