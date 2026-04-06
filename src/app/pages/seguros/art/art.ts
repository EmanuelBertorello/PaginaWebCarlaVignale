import { Component } from '@angular/core';
import { SeguroBase, SeguroConfig } from '../seguro-base/seguro-base';

@Component({
  selector: 'app-art',
  standalone: true,
  imports: [SeguroBase],
  template: `<app-seguro-base [config]="config" />`,
})
export class ArtPage {
  config: SeguroConfig = {
    title: 'ART para Empresas',
    subtitle: 'Cumplí con la Ley de Riesgos del Trabajo y protegé a tus empleados. Solución integral para empresas de todo tamaño.',
    category: 'Seguros Empresariales',
    emoji: '💼',
    heroGradient: 'linear-gradient(135deg, #1a3a4a 0%, #2c5f6e 100%)',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&w=960',
    coverages: [
      { icon: '🏥', title: 'Accidentes de Trabajo', desc: 'Cobertura médica y económica ante accidentes laborales.' },
      { icon: '🦺', title: 'Enfermedades Profesionales', desc: 'Indemnización por enfermedades derivadas del trabajo.' },
      { icon: '🚑', title: 'Atención Médica Inmediata', desc: 'Red de prestadores en todo el país para atención urgente.' },
      { icon: '📋', title: 'Incapacidad Temporal', desc: 'Salario complementario durante el período de recuperación.' },
      { icon: '⚖️', title: 'Cumplimiento Legal', desc: 'Ley N° 24.557 de Riesgos del Trabajo — obligatoria por ley.' },
      { icon: '🔄', title: 'Reinserción Laboral', desc: 'Programas de rehabilitación y reintegro al puesto de trabajo.' },
    ],
    docs: [
      'CUIT de la empresa',
      'Cantidad de empleados',
      'Actividad principal (CIIU)',
      'Nómina de empleados (opcional)',
      'Dirección del establecimiento',
    ],
    waText: 'Hola Carla, necesito cotizar una ART para mi empresa.',
  };
}
