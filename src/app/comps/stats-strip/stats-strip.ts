import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stats-strip',
  standalone: true,
  templateUrl: './stats-strip.html',
  styleUrl: './stats-strip.scss',
})
export class StatsStrip {
  @Input() text = '+1200 clientes en todo el Pais (2025)';

  // si querés cambiar la imagen después, solo cambiás este input
  @Input() bgImage = 'https://images.pexels.com/photos/4386373/pexels-photo-4386373.jpeg?auto=compress&cs=tinysrgb&w=1600';
}
