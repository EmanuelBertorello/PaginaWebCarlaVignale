import { Component } from '@angular/core';
import { SeguroBase, SeguroConfig } from '../seguro-base/seguro-base';

@Component({
  selector: 'app-vida',
  standalone: true,
  imports: [SeguroBase],
  template: `<app-seguro-base [config]="config" />`,
})
export class VidaPage {
  config: SeguroConfig = {
    title: 'Seguro de Vida',
    subtitle: 'El mejor regalo que podés darle a tu familia es seguridad. Asegurate de que estén protegidos sin importar lo que pase.',
    category: 'Seguros de Vida',
    emoji: '❤️',
    heroGradient: 'linear-gradient(135deg, #6b1a1a 0%, #c0392b 100%)',
    image: 'https://images.pexels.com/photos/1560932/pexels-photo-1560932.jpeg?auto=compress&w=960',
    coverages: [
      { icon: '💰', title: 'Capital por Fallecimiento', desc: 'Suma asegurada pagada a los beneficiarios en caso de fallecimiento.' },
      { icon: '🏥', title: 'Invalidez Total y Permanente', desc: 'Cobertura ante invalidez que impida trabajar permanentemente.' },
      { icon: '🩺', title: 'Enfermedades Graves', desc: 'Indemnización anticipada ante diagnóstico de enfermedades críticas.' },
      { icon: '👨‍👩‍👧', title: 'Renta Familiar', desc: 'Renta mensual para sostener a tu familia ante imprevistos.' },
      { icon: '✈️', title: 'Muerte Accidental', desc: 'Capital adicional en caso de fallecimiento por accidente.' },
      { icon: '📋', title: 'Sepelio', desc: 'Cobertura de gastos de sepelio para el asegurado.' },
    ],
    docs: [
      'DNI del asegurado',
      'Fecha de nacimiento',
      'Ocupación o profesión',
      'Suma a asegurar deseada',
      'Datos de los beneficiarios',
    ],
    waText: 'Hola Carla, quiero cotizar un seguro de vida.',
  };
}
