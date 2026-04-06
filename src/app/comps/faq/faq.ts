import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

interface FaqItem {
  question: string;
  answer: string;
  open: boolean;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [NgFor],
  templateUrl: './faq.html',
  styleUrl: './faq.scss',
})
export class Faq {
  items: FaqItem[] = [
    {
      question: '¿Cuánto cuesta un seguro automotor?',
      answer: 'El precio de un seguro automotor depende del modelo, año, zona y tipo de cobertura elegida. En Argentina, una Responsabilidad Civil básica puede partir desde $15.000/mes, mientras que una cobertura Todo Riesgo puede superar los $80.000/mes para vehículos de alta gama. Te hacemos una cotización personalizada sin costo.',
      open: false,
    },
    {
      question: '¿Qué es un PAS y por qué conviene asegurarse con uno?',
      answer: 'Un PAS (Productor Asesor de Seguros) es un profesional habilitado por la Superintendencia de Seguros de la Nación (SSN) para intermediar entre el asegurado y las compañías. A diferencia de contratar directamente con una aseguradora, el PAS trabaja para VOS: busca la mejor cobertura al mejor precio entre múltiples compañías y te acompaña en caso de siniestro.',
      open: false,
    },
    {
      question: '¿Qué hago si tengo un siniestro?',
      answer: 'Ante un siniestro, comunicate inmediatamente con nosotros por WhatsApp. Te guiaremos paso a paso: denuncia ante la aseguradora, documentación necesaria, plazos y seguimiento del expediente. Nuestra asistencia en siniestros es parte del servicio, sin costo adicional.',
      open: false,
    },
    {
      question: '¿Puedo pagar mi seguro con billetera virtual o tarjeta?',
      answer: 'Sí. La mayoría de las aseguradoras con las que trabajamos aceptan pagos por débito automático, transferencia bancaria, tarjeta de crédito y billeteras virtuales como Mercado Pago. Te informamos los medios disponibles al momento de contratar.',
      open: false,
    },
    {
      question: '¿Cuánto demora en activarse la cobertura?',
      answer: 'Una vez aprobada la póliza y acreditado el primer pago, la cobertura queda activa en forma inmediata. Te enviamos el certificado de cobertura digital para que lo tengas en el acto.',
      open: false,
    },
    {
      question: '¿Puedo asegurar un auto usado o con antigüedad?',
      answer: 'Sí, trabajamos con coberturas para vehículos de hasta 20 años de antigüedad según la aseguradora. Para autos mayores, se evalúa el estado general y la zona de radicación. Consultanos sin compromiso y encontramos la mejor opción.',
      open: false,
    },
    {
      question: '¿Qué diferencia hay entre Responsabilidad Civil y Todo Riesgo?',
      answer: 'La Responsabilidad Civil (RC) cubre los daños que causás a TERCEROS (personas o bienes). Es la cobertura mínima obligatoria. El Todo Riesgo incluye además los daños a TU propio vehículo: robo total, daños parciales, incendio y más. Hay coberturas intermedias como "Terceros Completo" que incluyen robo e incendio del propio vehículo.',
      open: false,
    },
    {
      question: '¿Es obligatorio tener ART si tengo empleados?',
      answer: 'Sí, la Ley N° 24.557 de Riesgos del Trabajo obliga a todo empleador a contratar una ART para su personal en relación de dependencia. El incumplimiento acarrea multas y responsabilidad civil directa del empleador ante un accidente laboral.',
      open: false,
    },
  ];

  toggle(index: number): void {
    this.items[index].open = !this.items[index].open;
  }
}
