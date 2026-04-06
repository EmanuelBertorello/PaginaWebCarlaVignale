import { Routes } from '@angular/router';

export const routes: Routes = [

  // ── Home ───────────────────────────────────────────────────
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/home/home').then(m => m.Home),
    title: 'Carla Vignale — Seguros en Rosario | PAS Matriculada SSN',
  },

  // ── Ramos genéricos (rutas específicas primero) ────────────
  {
    path: 'seguros/automotor',
    loadComponent: () => import('./pages/seguros/automotor/automotor').then(m => m.AutomotorPage),
    title: 'Seguro Automotor — Carla Vignale',
  },
  {
    path: 'seguros/hogar',
    loadComponent: () => import('./pages/seguros/hogar/hogar').then(m => m.HogarPage),
    title: 'Seguro de Hogar — Carla Vignale',
  },
  {
    path: 'seguros/vida',
    loadComponent: () => import('./pages/seguros/vida/vida').then(m => m.VidaPage),
    title: 'Seguro de Vida — Carla Vignale',
  },
  {
    path: 'seguros/art',
    loadComponent: () => import('./pages/seguros/art/art').then(m => m.ArtPage),
    title: 'ART para Empresas — Carla Vignale',
  },
  {
    path: 'seguros/moto',
    loadComponent: () => import('./pages/seguros/moto/moto').then(m => m.MotoPage),
    title: 'Seguro de Moto — Carla Vignale',
  },
  {
    path: 'seguros/viajes',
    loadComponent: () => import('./pages/seguros/viajes/viajes').then(m => m.ViajesPage),
    title: 'Seguro de Viajes — Carla Vignale',
  },

  // ── Brand Landings dinámicas — /:brandSlug (al final) ─────
  // Marcas disponibles: peugeot-208 | toyota-hilux | fiat-cronos
  //                     volkswagen-amarok | renault-kardian
  {
    path: 'seguros/:brandSlug',
    loadComponent: () =>
      import('./pages/seguros/brand-landing/brand-landing').then(m => m.BrandLandingComponent),
  },

  // ── Páginas estáticas ──────────────────────────────────────
  {
    path: 'amarok',
    loadComponent: () => import('./pages/amarok/amarok').then(m => m.Amarok),
  },
  {
    path: 'privacidad',
    loadComponent: () => import('./pages/home/home').then(m => m.Home),
  },
  {
    path: 'terminos',
    loadComponent: () => import('./pages/home/home').then(m => m.Home),
  },
  {
    path: 'contacto',
    loadComponent: () => import('./pages/home/home').then(m => m.Home),
  },

  { path: '**', redirectTo: '' },
];
