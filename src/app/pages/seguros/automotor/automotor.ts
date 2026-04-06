import { Component } from '@angular/core';
import { SeguroBase, SeguroConfig } from '../seguro-base/seguro-base';

@Component({
  selector: 'app-automotor',
  standalone: true,
  imports: [SeguroBase],
  template: `<app-seguro-base [config]="config" />`,
})
export class AutomotorPage {
  config: SeguroConfig = {
    title: 'Seguro Automotor',
    subtitle: 'Protegé tu vehículo con la mejor cobertura. Desde Responsabilidad Civil hasta Todo Riesgo, con asistencia en ruta y defensa legal incluida.',
    category: 'Seguros de Autos',
    emoji: '🚗',
    heroGradient: 'linear-gradient(135deg, #003366 0%, #005099 100%)',
    image: 'assets/img/aut.jpg',
    coverages: [
      { icon: '🛡️', title: 'Responsabilidad Civil', desc: 'Cobertura por daños a terceros en caso de accidente.' },
      { icon: '🔧', title: 'Daños Parciales', desc: 'Reparación de daños materiales al vehículo asegurado.' },
      { icon: '🚚', title: 'Remolque y Grúa', desc: 'Asistencia en ruta 24/7 en todo el territorio nacional.' },
      { icon: '🔥', title: 'Incendio Total', desc: 'Cobertura por pérdida total del vehículo por incendio.' },
      { icon: '⚖️', title: 'Defensa Penal', desc: 'Asesoramiento jurídico ante accidentes de tránsito.' },
      { icon: '📋', title: 'Todo Riesgo', desc: 'La cobertura más completa: robo total, daño parcial y más.' },
    ],
    docs: [
      'DNI del titular',
      'Cédula verde o azul del vehículo',
      'Número de patente',
      'Año y modelo del vehículo',
      'Código postal del domicilio',
    ],
    waText: 'Hola Carla, quiero cotizar un seguro automotor.',
  };
}
