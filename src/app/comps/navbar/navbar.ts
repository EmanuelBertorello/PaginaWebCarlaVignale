import { Component, HostListener } from '@angular/core';
import { NgFor, } from '@angular/common';

type NavLink = { label: string; target: string };

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
  logoAlt = 'Logo';

  links: NavLink[] = [
    { label: 'Inicio',          target: 'top' },
    { label: 'Sobre nosotros',  target: 'info' },
    { label: 'Contactanos',     target: 'contacto' },
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

    const headerOffset = 110; // ajustá si cambia la altura del navbar
    const rect = el.getBoundingClientRect();
    const y = rect.top + window.pageYOffset - headerOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}
