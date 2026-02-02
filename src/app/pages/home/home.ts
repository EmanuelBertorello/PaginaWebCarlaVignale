import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { Cv } from '../../comps/cv/cv';

import { HeroApp } from '../../comps/hero-app/hero-app';
import { Carrusel, Provider } from '../../comps/carrusel/carrusel';

type Product = { name: string; icon: string; link?: string };

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgFor, HeroApp, Carrusel],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  bullets: string[] = [
    'Localizá tu asesor',
    'Pagá tus pólizas por MercadoPago',
    'Creá tus denuncias de siniestro por sistema de voz',
    'Solicitá asistencia Mecánica con geolocalización',
    'Descargá tus pólizas y certificados de cobertura',
  ];

  products: Product[] = [
    { name: 'Automotor', icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@2.47.0/icons/car.svg', link: '/seguros/automotor' },
    { name: 'Moto', icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@2.47.0/icons/motorbike.svg', link: '/seguros/moto' },
    { name: 'Embarcaciones', icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@2.47.0/icons/ship.svg', link: '/seguros/embarcaciones' },
    { name: 'Hogar', icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@2.47.0/icons/home.svg', link: '/seguros/hogar' },
    { name: 'Incendio', icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@2.47.0/icons/flame.svg', link: '/seguros/incendio' },
    { name: 'Causion', icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@2.47.0/icons/home-dollar.svg', link: '/seguros/alquiler-garantizado' },
    { name: 'Accidentes Personales', icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@2.47.0/icons/first-aid-kit.svg', link: '/seguros/accidentes-personales' },
    { name: 'Vida', icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@2.47.0/icons/heart.svg', link: '/seguros/vida' },
    { name: 'Mala Praxis', icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@2.47.0/icons/stethoscope.svg', link: '/seguros/mala-praxis' },
    { name: 'Mascota', icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@2.47.0/icons/paw.svg', link: '/seguros/mascota' },
    { name: 'Viajes', icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@2.47.0/icons/plane.svg', link: '/seguros/viajes' },
    { name: 'ART', icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@2.47.0/icons/briefcase.svg', link: '/seguros/art' },
  ];

  // Logos (podés pasar a assets locales cuando quieras)
  providers: Provider[] = [
    { name: 'Sancor Seguros',       logo: 'https://logo.clearbit.com/sancorseguros.com.ar' },
    { name: 'San Cristóbal',        logo: 'https://logo.clearbit.com/sancristobal.com.ar' },
    { name: 'Federación Patronal', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Logo_FederacionPatronal.png' },
    { name: 'Galeno',               logo: 'https://logo.clearbit.com/galeno.com.ar' },
    { name: 'Río Uruguay Seguros',  logo: 'https://logo.clearbit.com/riouruguay.com.ar' },
   
  ];
}
