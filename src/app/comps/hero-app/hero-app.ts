import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  NgZone,
  ChangeDetectorRef,
} from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-hero-app',
  standalone: true,
  imports: [NgFor],
  templateUrl: './hero-app.html',
  styleUrl: './hero-app.scss',
})
export class HeroApp implements OnInit, OnDestroy {
  constructor(private zone: NgZone, private cdr: ChangeDetectorRef) {}

  @Input() title = 'Tus seguros en buenas Manos';
  @Input() bullets: string[] = [
    'Solicitá tus polizas y cerficados ',
    'Pagá tus pólizas por Billetera Virtual',
    'Ayuda en el momento del siniestro',
    'Asistencia Mecánica Via whatsapp',
    'Respaldo y asesoramiento Juridico',
  ];

  @Input() playHref = '#';
  @Input() appHref = '#';

  @Input() phoneAlt = 'App en el celular';

  phoneImg = 'assets/img/aut.jpg';

  private readonly imageSequence = [
    'assets/img/aut.jpg',
    'assets/img/moto.jpg',
    'assets/img/avion.jpg',
  ];

  private currentIndex = 0;
  private intervalId: ReturnType<typeof setInterval> | null = null;
  private fadeTimeoutId: ReturnType<typeof setTimeout> | null = null;

  // fade
  isHidden = false;

  ngOnInit(): void {
    this.phoneImg = this.imageSequence[0];
    this.cdr.detectChanges(); // pinta inicial

    // correr interval fuera de Angular (performance) PERO volver a Angular al actualizar
    this.zone.runOutsideAngular(() => {
      this.intervalId = setInterval(() => {
        // si la pestaña está oculta, no animamos (evita bugs)
        if (document.hidden) return;

        // entramos a Angular SOLO para actualizar estado + CD
        this.zone.run(() => {
          // fade out
          this.isHidden = true;
          this.cdr.detectChanges();

          // cambio de imagen al terminar el fade
          if (this.fadeTimeoutId) clearTimeout(this.fadeTimeoutId);
          this.fadeTimeoutId = setTimeout(() => {
            this.currentIndex = (this.currentIndex + 1) % this.imageSequence.length;
            this.phoneImg = this.imageSequence[this.currentIndex];
            this.isHidden = false;

            // ✅ fuerza render inmediato sin necesitar scroll/mouse
            this.cdr.detectChanges();
          }, 400);
        });
      }, 3000);
    });

    // cuando vuelve a foco, forzamos un repaint
    document.addEventListener('visibilitychange', this.onVisibility);
    window.addEventListener('focus', this.onVisibility);
  }

  ngOnDestroy(): void {
    if (this.intervalId) clearInterval(this.intervalId);
    if (this.fadeTimeoutId) clearTimeout(this.fadeTimeoutId);

    document.removeEventListener('visibilitychange', this.onVisibility);
    window.removeEventListener('focus', this.onVisibility);
  }

  private onVisibility = () => {
    // cuando el usuario vuelve, aseguramos que se actualice la UI
    this.zone.run(() => this.cdr.detectChanges());
  };
}
