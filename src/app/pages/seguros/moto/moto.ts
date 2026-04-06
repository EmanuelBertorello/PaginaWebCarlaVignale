import { Component } from '@angular/core';
import { SeguroBase, SeguroConfig } from '../seguro-base/seguro-base';

@Component({
  selector: 'app-moto',
  standalone: true,
  imports: [SeguroBase],
  template: `<app-seguro-base [config]="config" />`,
})
export class MotoPage {
  config: SeguroConfig = {
    title: 'Seguro de Moto',
    subtitle: 'Rodá tranquilo. Cobertura completa para tu moto con las mejores aseguradoras del mercado.',
    category: 'Seguros de Motos',
    emoji: '🏍️',
    heroGradient: 'linear-gradient(135deg, #2d1a4a 0%, #5a2d8a 100%)',
    image: 'assets/img/moto.jpg',
    coverages: [
      { icon: '🛡️', title: 'Responsabilidad Civil', desc: 'Obligatoria por ley. Cubre daños a terceros.' },
      { icon: '🔧', title: 'Daños Parciales', desc: 'Reparación ante golpes, caídas y accidentes.' },
      { icon: '🔓', title: 'Robo Total', desc: 'Indemnización por robo o hurto de la moto.' },
      { icon: '🚚', title: 'Asistencia en Ruta', desc: 'Grúa y auxilio mecánico en todo el país.' },
      { icon: '⛑️', title: 'Accidentes del Conductor', desc: 'Cobertura médica y de invalidez para el piloto.' },
      { icon: '🏍️', title: 'Todo Riesgo', desc: 'La cobertura más amplia para tu moto.' },
    ],
    docs: [
      'DNI del titular',
      'Título del vehículo o cédula',
      'Número de patente',
      'Marca, modelo y año',
      'Código postal del domicilio',
    ],
    waText: 'Hola Carla, quiero cotizar un seguro para mi moto.',
  };
}
