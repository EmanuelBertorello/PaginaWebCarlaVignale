import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

export type Provider = { name: string; logo: string; url?: string };

@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [NgFor],
  templateUrl: './carrusel.html',
  styleUrl: './carrusel.scss',
})
export class Carrusel {
  @Input() title = 'Nuestros proveedores';
  @Input() providers: Provider[] = [];
  index = 0;

  prev() { this.index = (this.index - 1 + this.providers.length) % this.providers.length; }
  next() { this.index = (this.index + 1) % this.providers.length; }
  go(i: number) { this.index = i; }
  trackByName(_i: number, p: Provider) { return p.name; }

  // Fallback de logo (evita el "as" en template)
  onImgError(ev: Event) {
    const img = ev.target as HTMLImageElement;
    if (img && !img.src.includes('assets/logos/fallback.png')) {
      img.src = 'assets/logos/fallback.png';
    }
  }
}
