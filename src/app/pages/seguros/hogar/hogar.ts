import { Component } from '@angular/core';
import { SeguroBase, SeguroConfig } from '../seguro-base/seguro-base';

@Component({
  selector: 'app-hogar',
  standalone: true,
  imports: [SeguroBase],
  template: `<app-seguro-base [config]="config" />`,
})
export class HogarPage {
  config: SeguroConfig = {
    title: 'Seguro de Hogar',
    subtitle: 'Tu casa, tu inversión más importante. Protegela contra incendios, robos, inundaciones y accidentes domésticos.',
    category: 'Seguros del Hogar',
    emoji: '🏠',
    heroGradient: 'linear-gradient(135deg, #1a4a1a 0%, #2d7a2d 100%)',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&w=960',
    coverages: [
      { icon: '🔥', title: 'Incendio y Explosión', desc: 'Cobertura total ante siniestros por incendio o explosión.' },
      { icon: '🏚️', title: 'Daños por Inundación', desc: 'Protección ante ingresos de agua y daños estructurales.' },
      { icon: '🔓', title: 'Robo con Violencia', desc: 'Indemnización por hurto o robo con fuerza en las cosas.' },
      { icon: '⚡', title: 'Daños Eléctricos', desc: 'Cobertura ante cortocircuitos y sobretensiones.' },
      { icon: '🧱', title: 'Responsabilidad Civil', desc: 'Ante daños a terceros originados en el inmueble.' },
      { icon: '🔧', title: 'Gastos Adicionales', desc: 'Alojamiento transitorio mientras se repara tu vivienda.' },
    ],
    docs: [
      'DNI del titular',
      'Dirección completa del inmueble',
      'Tipo de construcción (mampostería, madera, etc.)',
      'Superficie aproximada en m²',
      'Valor del contenido a asegurar',
    ],
    waText: 'Hola Carla, quiero cotizar un seguro de hogar.',
  };
}
