import { Component, HostListener } from '@angular/core';
import { NgFor } from '@angular/common';

type NavLink = { label: string; target: string; isCta?: boolean };

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgFor],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  scrolled = false;
  open = false;

  logoSrc = 'assets/img/logo.png';
  logoAlt = 'Carla Vignale Seguros';

  links: NavLink[] = [
    { label: 'Inicio',         target: 'top' },
    { label: 'Nuestros Servicios', target: 'servi' },
    { label: 'Nosotros',       target: 'info' },
    { label: 'Aseguradoras',   target: 'carrusel' },
    { label: 'Preguntas Frecuentes', target: 'faq' },
    { label: 'Siniestros',     target: 'contacto' },
    { label: '📋 Cotizar',    target: 'servi', isCta: true },
  ];

  instagram = 'https://www.instagram.com/car.vignale/';
  facebook  = 'https://www.facebook.com/share/1GFbUjmKnd/';
  correo    = 'mailto:carvignale@gmail.com';

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = (window.scrollY || 0) > 6;
  }

  toggle() { this.open = !this.open; }
  close()  { this.open = false; }

  scrollTo(target: string) {
    this.close();

    if (target === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const el = document.getElementById(target);
    if (!el) return;

    const headerOffset = 110;
    const rect = el.getBoundingClientRect();
    const y = rect.top + window.scrollY - headerOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}
