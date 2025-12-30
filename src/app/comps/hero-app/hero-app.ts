import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-hero-app',
  standalone: true,
  imports: [NgFor],
  templateUrl: './hero-app.html',
  styleUrl: './hero-app.scss',
})
export class HeroApp implements OnInit, OnDestroy {
  @Input() title = 'Tus seguros en buenas Manos';
  @Input() bullets: string[] = [
    'Solicitá tus polizas y cerficados ',
    'Pagá tus pólizas por Billetera Virtual',
    'Ayuda en el momento del siniestro',
    'Asistencia Mecánica Via whatsapp',
    'Respaldo y asesoramiento Juridico',
  
  
  ];

  @Input() playHref = '#';
  @Input() appHref  = '#';

  @Input() phoneImg = 'assets/img/aut.jpg';
  @Input() phoneAlt = 'App en el celular';

  private readonly imageSequence = [
    'assets/img/aut.jpg',
    'assets/img/moto.jpg',
    'assets/img/avion.jpg',
  ];

  private currentIndex = 0;
  private intervalId: any;

  // para el fade
  isHidden = false;

  ngOnInit(): void {
    this.phoneImg = this.imageSequence[0];

    this.intervalId = setInterval(() => {
      // 1) fade out
      this.isHidden = true;

      // 2) cuando termina el fade-out, cambio la imagen y hago fade-in
      setTimeout(() => {
        this.currentIndex = (this.currentIndex + 1) % this.imageSequence.length;
        this.phoneImg = this.imageSequence[this.currentIndex];
        this.isHidden = false;
      }, 400); // mismo tiempo que el transition del SCSS
    }, 3000); // cada 3 segundos
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
