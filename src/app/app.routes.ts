import { Routes } from '@angular/router';

// Mapa de direcciones de la app
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadComponent: () => import('./pages/inicio/inicio.page').then((m) => m.InicioPage),
  },
  {
    path: '**',
    redirectTo: 'inicio',
  },
];
