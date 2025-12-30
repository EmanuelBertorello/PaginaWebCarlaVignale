import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
  // stubs opcionales para los links del footer
  { path: 'privacidad',  loadComponent: () => import('./pages/home/home').then(m => m.Home) },
  { path: 'terminos',    loadComponent: () => import('./pages/home/home').then(m => m.Home) },
  { path: 'contacto',    loadComponent: () => import('./pages/home/home').then(m => m.Home) },
  { path: '**', redirectTo: '' },
];
