# MiBodega Móvil · Semana 01

Primera app híbrida con Ionic 8 + Angular 20 (standalone) + Capacitor 7.

## Ejecutar
```bash
npm install
ionic serve          # o npm start → http://localhost:8100
```

## Android
```bash
npm run build
npx cap add android   # solo la primera vez
npx cap sync android
npx cap open android  # ▶ Run en Android Studio
# o con live reload: npm run android
```

## Reto de la semana (resuelto)
1. Tarjeta "Ventas del día" con +S/ 1 y −S/ 1 (nunca baja de 0) → `src/app/pages/inicio`.
2. `--ion-color-primary` cambiado en `src/theme/variables.scss`.
3. Ver `utilitarios/comandos_git.txt` para los dos commits.
