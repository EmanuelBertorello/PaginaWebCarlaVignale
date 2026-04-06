import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface SeguroConfig {
  title: string;
  subtitle: string;
  category: string;
  emoji: string;
  heroGradient: string;
  image: string;
  coverages: { icon: string; title: string; desc: string }[];
  docs: string[];
  waText: string;
}

@Component({
  selector: 'app-seguro-base',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './seguro-base.html',
  styleUrl: './seguro-base.scss',
})
export class SeguroBase {
  @Input({ required: true }) config!: SeguroConfig;

  readonly phone = '5493416055454';

  get waHref(): string {
    return `https://wa.me/${this.phone}?text=${encodeURIComponent(this.config.waText)}`;
  }
}
