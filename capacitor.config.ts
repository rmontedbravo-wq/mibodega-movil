import type { CapacitorConfig } from '@capacitor/cli';

// Configuración del "food truck": cómo se llama la app y de qué carpeta saca la web.
const config: CapacitorConfig = {
  appId: 'pe.edu.gildaballivian.mibodega', // identificador único (como un DNI de la app)
  appName: 'MiBodega',                     // nombre que verá el usuario en el celular
  webDir: 'www',                           // carpeta que genera "npm run build"
};

export default config;
