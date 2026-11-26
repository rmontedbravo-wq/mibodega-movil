import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

// Interruptor general: "enciende" la app usando AppComponent como raíz
bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, // animaciones de pantallas al estilo móvil
    provideIonicAngular(),                                          // activa los componentes <ion-...>
    provideRouter(routes, withPreloading(PreloadAllModules)),       // activa la navegación con app.routes.ts
  ],
}).catch((err) => console.error(err));
