import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/home/home').then(m => m.Home),
  },

  {
    path: 'amarok',
    loadComponent: () =>
      import('./pages/amarok/amarok').then(m => m.Amarok),
  },

  // stubs opcionales
  {
    path: 'privacidad',
    loadComponent: () =>
      import('./pages/home/home').then(m => m.Home),
  },
  {
    path: 'terminos',
    loadComponent: () =>
      import('./pages/home/home').then(m => m.Home),
  },
  {
    path: 'contacto',
    loadComponent: () =>
      import('./pages/home/home').then(m => m.Home),
  },

  { path: '**', redirectTo: '' },
];
