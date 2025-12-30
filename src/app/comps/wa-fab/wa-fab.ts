import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wa-fab',
  standalone: true,
  templateUrl: './wa-fab.html',
  styleUrl: './wa-fab.scss',
})
export class WaFab {
  /** Formato para wa.me: sin + ni espacios. AR +54 con “9” móvil: 5493416055454 */
  @Input() phone = '5493416055454';
  @Input() text  = 'Hola, quiero hacer una consulta.';

  get href(): string {
    return `https://wa.me/${this.phone}?text=${encodeURIComponent(this.text)}`;
    // Alternativa: `https://api.whatsapp.com/send?phone=${this.phone}&text=${...}`
  }
}
