import { Component } from '@angular/core';
import { SeguroBase, SeguroConfig } from '../seguro-base/seguro-base';

@Component({
  selector: 'app-viajes',
  standalone: true,
  imports: [SeguroBase],
  template: `<app-seguro-base [config]="config" />`,
})
export class ViajesPage {
  config: SeguroConfig = {
    title: 'Seguro de Viajes',
    subtitle: 'Viajá al mundo sin preocupaciones. Asistencia médica internacional, cancelaciones y mucho más.',
    category: 'Seguros de Viajes',
    emoji: '✈️',
    heroGradient: 'linear-gradient(135deg, #1a3a2d 0%, #0d6e5a 100%)',
    image: 'assets/img/avion.jpg',
    coverages: [
      { icon: '🏥', title: 'Asistencia Médica', desc: 'Cobertura de gastos médicos en el exterior, sin límite de fronteras.' },
      { icon: '🧳', title: 'Pérdida de Equipaje', desc: 'Indemnización por extravío o daño de equipaje en vuelo.' },
      { icon: '❌', title: 'Cancelación de Viaje', desc: 'Reembolso ante cancelación por causas imprevistas justificadas.' },
      { icon: '✈️', title: 'Demora de Vuelo', desc: 'Gastos de hotel y comida ante demoras mayores a 6 horas.' },
      { icon: '📞', title: 'Asistencia Legal', desc: 'Asesoramiento jurídico en el destino ante imprevistos.' },
      { icon: '🌍', title: 'Cobertura COVID-19', desc: 'Atención médica y cuarentena ante casos de COVID-19.' },
    ],
    docs: [
      'DNI o pasaporte del viajero',
      'Fecha de salida y regreso',
      'País o países de destino',
      'Edad de todos los viajeros',
      'Tipo de actividades (deportes extremos, etc.)',
    ],
    waText: 'Hola Carla, quiero cotizar un seguro de viaje.',
  };
}
