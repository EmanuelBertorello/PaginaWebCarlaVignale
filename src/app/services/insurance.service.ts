import { Injectable } from '@angular/core';

// ─────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────
export interface Coverage {
  id: 'rc' | 'terceros' | 'todo-riesgo';
  name: string;
  tagline: string;
  features: string[];
  price: number;        // precio mensual en ARS
  highlighted: boolean;
  badge?: string;
}

export interface BrandFaq {
  question: string;
  answer: string;
}

export interface BrandData {
  slug: string;
  brand: string;
  model: string;
  fullName: string;        // "Peugeot 208"
  heroTitle: string;
  heroSubtitle: string;
  tagline: string;         // frase corta para OG / meta
  patentamiento: string;   // dato de mercado
  heroImage: string;       // URL de imagen del auto
  accentColor: string;     // color de marca
  accentColorDark: string;
  marketPrice: number;     // precio promedio del mercado (Todo Riesgo)
  carlaPrice: number;      // precio con Carla (40% menos)
  savings: number;         // ARS mensuales de ahorro
  coverages: Coverage[];
  faqs: BrandFaq[];
  waText: string;          // mensaje prellenado de WhatsApp
  seoTitle: string;
  seoDescription: string;
}

// ─────────────────────────────────────────────────────────────
// Datos de mercado — Argentina, Abril 2026
// ─────────────────────────────────────────────────────────────
const BRANDS: Record<string, BrandData> = {

  'peugeot-208': {
    slug: 'peugeot-208',
    brand: 'Peugeot',
    model: '208',
    fullName: 'Peugeot 208',
    heroTitle: 'Asegurá tu Peugeot 208 con el respaldo que buscás',
    heroSubtitle: 'Más de 2.200 Peugeot 208 se patentan por mes en Argentina. ¿Tu póliza actual creció un 48% este año? Te conseguimos el mismo nivel de cobertura hasta un 40% más barato.',
    tagline: 'Seguro para Peugeot 208 en Rosario — Cotizá gratis con Carla',
    patentamiento: '+2.200 unidades/mes en Argentina',
    heroImage: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=900&q=80',
    accentColor: '#0066cc',
    accentColorDark: '#004a99',
    marketPrice: 245_000,
    carlaPrice: 145_000,
    savings: 100_000,
    coverages: [
      {
        id: 'rc',
        name: 'Responsabilidad Civil',
        tagline: 'La cobertura obligatoria por ley',
        features: [
          'Daños a terceros: personas y bienes',
          'Cobertura legal incluida',
          'Trámite de denuncia asistido',
          'Suma asegurada actualizable',
        ],
        price: 38_000,
        highlighted: false,
      },
      {
        id: 'terceros',
        name: 'Terceros Completo',
        tagline: 'La más elegida para el 208',
        badge: 'Más popular',
        features: [
          'Todo lo de Responsabilidad Civil',
          'Robo e incendio total del vehículo',
          'Granizo y daños por fenómenos naturales',
          'Asistencia mecánica 24/7 en ruta',
          'Auto de reemplazo hasta 7 días',
        ],
        price: 95_000,
        highlighted: true,
      },
      {
        id: 'todo-riesgo',
        name: 'Todo Riesgo',
        tagline: 'Cobertura sin límites',
        features: [
          'Todo lo de Terceros Completo',
          'Daños parciales al propio vehículo',
          'Cristales y luneta sin franquicia',
          'Robo de partes y accesorios',
          'Valor de reposición en el primer año',
        ],
        price: 145_000,
        highlighted: false,
      },
    ],
    faqs: [
      {
        question: '¿El Peugeot 208 tiene cobertura específica para granizo?',
        answer: 'Sí. En nuestra cobertura Terceros Completo y Todo Riesgo incluimos granizo y fenómenos naturales sin costo adicional. Dado el alto índice de granizo en Rosario y el litoral, te recomendamos especialmente esta cobertura para el 208.',
      },
      {
        question: '¿Qué pasa con la franquicia si rompo un cristal del 208?',
        answer: 'En el plan Todo Riesgo, los cristales y la luneta no tienen franquicia. En Terceros Completo hay una franquicia del 10% del valor del cristal. Te ayudamos a elegir la opción más conveniente según tu uso del vehículo.',
      },
      {
        question: '¿Puedo asegurar un Peugeot 208 usado?',
        answer: 'Sí, trabajamos con coberturas para Peugeot 208 de hasta 15 años de antigüedad dependiendo de la aseguradora. Para modelos 2015 en adelante tenemos las opciones más competitivas del mercado.',
      },
      {
        question: '¿El seguro cubre el accidente si conduce otra persona?',
        answer: 'Con nuestra cobertura Terceros Completo y Todo Riesgo, cualquier conductor habilitado que tenga el permiso vigente está cubierto. Solo excluimos conductores menores de 21 años sin cláusula especial.',
      },
      {
        question: '¿Cuánto ahorro al recotizar mi Peugeot 208 con Carla?',
        answer: 'En promedio, nuestros clientes con Peugeot 208 ahorran entre $80.000 y $120.000 por mes al recotizar. El mercado subió las primas un 48% anual, pero nosotros comparamos entre 9 aseguradoras para darte el mejor precio.',
      },
    ],
    waText: 'Hola Carla, vengo de la web. Tengo un Peugeot 208 y quiero la recotización mejorada.',
    seoTitle: 'Seguro Peugeot 208 en Rosario — Cotizá con Carla Vignale | PAS SSN',
    seoDescription: 'Seguro para Peugeot 208 desde $38.000/mes. Ahorrá hasta 40% al recotizar. PAS matriculada N° 7192. Cotizá gratis en Rosario, Santa Fe.',
  },

  'toyota-hilux': {
    slug: 'toyota-hilux',
    brand: 'Toyota',
    model: 'Hilux',
    fullName: 'Toyota Hilux',
    heroTitle: 'El seguro que tu Toyota Hilux merece',
    heroSubtitle: 'La Hilux lidera el post-venta en Argentina. Protegé tu inversión con una cobertura Todo Riesgo que acompaña el valor real de tu camioneta.',
    tagline: 'Seguro Toyota Hilux en Rosario — Cotizá gratis con Carla',
    patentamiento: 'Líder en post-venta en Argentina',
    heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80',
    accentColor: '#cc0000',
    accentColorDark: '#990000',
    marketPrice: 320_000,
    carlaPrice: 190_000,
    savings: 130_000,
    coverages: [
      {
        id: 'rc',
        name: 'Responsabilidad Civil',
        tagline: 'Cobertura obligatoria',
        features: [
          'Daños a terceros: personas y bienes',
          'Defensa penal incluida',
          'Asistencia legal 24/7',
          'Suma asegurada actualizable',
        ],
        price: 55_000,
        highlighted: false,
      },
      {
        id: 'terceros',
        name: 'Terceros Completo',
        tagline: 'La más elegida para Hilux de trabajo',
        badge: 'Más popular',
        features: [
          'Todo lo de Responsabilidad Civil',
          'Robo e incendio total',
          'Granizo y fenómenos naturales',
          'Asistencia en ruta 24/7 (grúa pesada)',
          'Cobertura en zonas rurales y de trabajo',
        ],
        price: 128_000,
        highlighted: true,
      },
      {
        id: 'todo-riesgo',
        name: 'Todo Riesgo',
        tagline: 'Protección total para tu inversión',
        features: [
          'Todo lo de Terceros Completo',
          'Daños parciales al propio vehículo',
          'Accesorios de trabajo (barandas, estribos)',
          'Cristales sin franquicia',
          'Valor de reposición hasta 2 años',
        ],
        price: 190_000,
        highlighted: false,
      },
    ],
    faqs: [
      {
        question: '¿La cobertura incluye cuando uso la Hilux para trabajo?',
        answer: 'Sí, trabajamos con coberturas específicas para vehículos de uso mixto (particular + comercial). Te recomendamos declarar el uso real al asegurar para evitar problemas al momento de un siniestro.',
      },
      {
        question: '¿Cubre daños en caminos de tierra o zonas rurales?',
        answer: 'Las coberturas estándar cubren en todo el territorio nacional incluyendo rutas y caminos no pavimentados. Para uso off-road intensivo podemos agregar una cláusula especial.',
      },
      {
        question: '¿Los accesorios aftermarket de la Hilux están cubiertos?',
        answer: 'En el plan Todo Riesgo se pueden incorporar al valor asegurado los accesorios declarados: barandas, rollbar, estribos, bumpers, etc. Hay que declararlos al momento de contratar.',
      },
      {
        question: '¿Cuánto ahorro al recotizar mi Hilux con Carla?',
        answer: 'Los propietarios de Hilux ahorran en promedio $100.000–$130.000/mes al comparar entre aseguradoras. Te analizamos todas las opciones del mercado sin costo.',
      },
      {
        question: '¿La Hilux tiene buena prima por ser vehículo de trabajo?',
        answer: 'Depende de la aseguradora. Algunas penalizan el uso comercial con sobreprimas, mientras otras tienen planes específicos más competitivos. Por eso conviene consultar con un PAS que conozca el mercado.',
      },
    ],
    waText: 'Hola Carla, vengo de la web. Tengo una Toyota Hilux y quiero la recotización mejorada.',
    seoTitle: 'Seguro Toyota Hilux en Rosario — Cotizá con Carla Vignale | PAS SSN',
    seoDescription: 'Seguro para Toyota Hilux desde $55.000/mes. Ahorrá hasta 40% al recotizar. PAS matriculada N° 7192. Cotizá gratis en Rosario, Santa Fe.',
  },

  'fiat-cronos': {
    slug: 'fiat-cronos',
    brand: 'Fiat',
    model: 'Cronos',
    fullName: 'Fiat Cronos',
    heroTitle: 'El auto más vendido del país merece el mejor seguro',
    heroSubtitle: 'El Fiat Cronos es el auto más vendido en Argentina. Tu póliza subió con la inflación, pero el precio no tiene por qué acompañarla. Recotizá y ahorrá.',
    tagline: 'Seguro Fiat Cronos en Rosario — Cotizá gratis con Carla',
    patentamiento: 'El más vendido del país',
    heroImage: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=900&q=80',
    accentColor: '#c8102e',
    accentColorDark: '#9a0b22',
    marketPrice: 108_000,
    carlaPrice: 65_000,
    savings: 43_000,
    coverages: [
      {
        id: 'rc',
        name: 'Responsabilidad Civil',
        tagline: 'Cobertura mínima obligatoria',
        features: [
          'Daños a terceros: personas y bienes',
          'Cobertura legal básica',
          'Asistencia ante accidente',
          'Suma asegurada actualizable',
        ],
        price: 22_000,
        highlighted: false,
      },
      {
        id: 'terceros',
        name: 'Terceros Completo',
        tagline: 'La más inteligente para el Cronos',
        badge: 'Mejor relación precio/cobertura',
        features: [
          'Todo lo de Responsabilidad Civil',
          'Robo e incendio total del vehículo',
          'Granizo sin franquicia',
          'Asistencia mecánica 24/7',
          'Gestión de siniestro asistida',
        ],
        price: 42_000,
        highlighted: true,
      },
      {
        id: 'todo-riesgo',
        name: 'Todo Riesgo',
        tagline: 'Cobertura total sin sorpresas',
        features: [
          'Todo lo de Terceros Completo',
          'Daños parciales al propio vehículo',
          'Cristales y luneta',
          'Auto de reemplazo',
          'Valor de reposición primer año',
        ],
        price: 65_000,
        highlighted: false,
      },
    ],
    faqs: [
      {
        question: '¿El Cronos es barato de asegurar?',
        answer: 'Sí, el Fiat Cronos tiene una de las primas más competitivas del mercado por su bajo índice de siniestralidad y disponibilidad de repuestos. En Terceros Completo podés pagar desde $42.000/mes.',
      },
      {
        question: '¿Vale la pena el Todo Riesgo para un Cronos nuevo?',
        answer: 'Para un Cronos del año o con hasta 2 años de antigüedad, el Todo Riesgo vale la pena porque te cubre los daños parciales que son frecuentes en ciudad (paragolpes, espejos, etc.). A partir de los 3 años, Terceros Completo suele ser la mejor relación precio/valor.',
      },
      {
        question: '¿Cómo recotizan si ya tengo seguro con otra aseguradora?',
        answer: 'Solo necesitamos la póliza actual y los datos del vehículo. En 24 horas te presentamos comparativas de precio entre las aseguradoras con las que trabajamos y te decimos cuánto ahorrás.',
      },
      {
        question: '¿El granizo está cubierto en zona Rosario?',
        answer: 'Sí, Rosario está en zona de alto riesgo de granizo. En nuestras coberturas Terceros Completo y Todo Riesgo, el granizo está incluido sin franquicia adicional.',
      },
      {
        question: '¿Puedo pagar la prima en cuotas?',
        answer: 'Sí. La mayoría de aseguradoras con las que trabajamos ofrecen pago mensual por débito automático o tarjeta. También en cuotas sin interés con algunas tarjetas de crédito.',
      },
    ],
    waText: 'Hola Carla, vengo de la web. Tengo un Fiat Cronos y quiero la recotización mejorada.',
    seoTitle: 'Seguro Fiat Cronos en Rosario — Cotizá con Carla Vignale | PAS SSN',
    seoDescription: 'Seguro para Fiat Cronos desde $22.000/mes. Ahorrá hasta 40% al recotizar. PAS matriculada N° 7192. Cotizá gratis en Rosario, Santa Fe.',
  },

  'volkswagen-amarok': {
    slug: 'volkswagen-amarok',
    brand: 'Volkswagen',
    model: 'Amarok',
    fullName: 'Volkswagen Amarok',
    heroTitle: 'La nueva Amarok merece una cobertura a su altura',
    heroSubtitle: 'El lanzamiento más esperado de 2026. La nueva Amarok V6 llega con tecnología premium — asegurarla requiere un PAS que entienda su valor real.',
    tagline: 'Seguro VW Amarok en Rosario — Cotizá gratis con Carla',
    patentamiento: 'Lanzamiento Top 2026 — Nuevo Tera y Amarok V6',
    heroImage: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=900&q=80',
    accentColor: '#1b1b6b',
    accentColorDark: '#0f0f4a',
    marketPrice: 230_000,
    carlaPrice: 138_000,
    savings: 92_000,
    coverages: [
      {
        id: 'rc',
        name: 'Responsabilidad Civil',
        tagline: 'Cobertura obligatoria',
        features: [
          'Daños a terceros: personas y bienes',
          'Defensa penal y civil incluida',
          'Asistencia 24/7 en todo el país',
          'Suma asegurada actualizable',
        ],
        price: 52_000,
        highlighted: false,
      },
      {
        id: 'terceros',
        name: 'Terceros Completo',
        tagline: 'Ideal para la Amarok de trabajo',
        badge: 'Más popular',
        features: [
          'Todo lo de Responsabilidad Civil',
          'Robo e incendio total',
          'Granizo y fenómenos naturales',
          'Asistencia con grúa para vehículo pesado',
          'Cobertura en Mercosur',
        ],
        price: 95_000,
        highlighted: true,
      },
      {
        id: 'todo-riesgo',
        name: 'Todo Riesgo',
        tagline: 'Protección completa para el V6',
        features: [
          'Todo lo de Terceros Completo',
          'Daños parciales sin franquicia',
          'Cámara de retroceso y pantalla incluidas',
          'Cristales y parabrisas de fábrica',
          'Valor de reposición 0km hasta 18 meses',
        ],
        price: 138_000,
        highlighted: false,
      },
    ],
    faqs: [
      {
        question: '¿La nueva Amarok V6 tiene primas más altas por ser premium?',
        answer: 'Sí, las primas son algo más altas por el mayor valor del vehículo, pero la diferencia no es proporcional. Trabajamos con aseguradoras que ofrecen planes específicos para pickups premium que son muy competitivos.',
      },
      {
        question: '¿La tecnología digital del interior (pantalla, sensores) está cubierta?',
        answer: 'En el plan Todo Riesgo, los equipos de serie de fábrica están incluidos en el valor asegurado. Para accesorios aftermarket hay que declararlos específicamente.',
      },
      {
        question: '¿La Amarok tiene cobertura en países del Mercosur?',
        answer: 'Sí, en nuestros planes Terceros Completo y Todo Riesgo incluimos cobertura en Argentina, Uruguay, Paraguay, Brasil y Bolivia sin costo adicional.',
      },
      {
        question: '¿Puedo asegurar una Amarok que uso para empresa?',
        answer: 'Sí, tenemos coberturas específicas para flotas y vehículos corporativos con facturas a nombre de la empresa, incluyendo responsabilidad civil ampliada para uso comercial.',
      },
      {
        question: '¿Cuánto ahorro respecto a la concesionaria?',
        answer: 'Las coberturas ofrecidas en concesionarias suelen tener sobreprecios del 30–50% respecto al mercado libre. Comparando entre las aseguradoras con las que trabajamos, el ahorro promedio es de $92.000/mes en la Amarok.',
      },
    ],
    waText: 'Hola Carla, vengo de la web. Tengo una Volkswagen Amarok y quiero la recotización mejorada.',
    seoTitle: 'Seguro VW Amarok en Rosario — Cotizá con Carla Vignale | PAS SSN',
    seoDescription: 'Seguro para VW Amarok desde $52.000/mes. Ahorrá hasta 40% al recotizar. PAS matriculada N° 7192. Cotizá gratis en Rosario, Santa Fe.',
  },

  'renault-kardian': {
    slug: 'renault-kardian',
    brand: 'Renault',
    model: 'Kardian',
    fullName: 'Renault Kardian',
    heroTitle: 'El SUV urbano más popular con la cobertura que necesita',
    heroSubtitle: 'El Renault Kardian es el SUV urbano líder en Argentina. Precio competitivo, cobertura completa, asistencia inmediata. Cotizá con Carla.',
    tagline: 'Seguro Renault Kardian en Rosario — Cotizá gratis con Carla',
    patentamiento: 'SUV Urbana Líder en Argentina',
    heroImage: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=900&q=80',
    accentColor: '#ff6600',
    accentColorDark: '#cc5200',
    marketPrice: 96_000,
    carlaPrice: 58_000,
    savings: 38_000,
    coverages: [
      {
        id: 'rc',
        name: 'Responsabilidad Civil',
        tagline: 'Cobertura obligatoria',
        features: [
          'Daños a terceros: personas y bienes',
          'Asistencia legal básica',
          'Denuncia asistida',
          'Suma asegurada actualizable',
        ],
        price: 24_000,
        highlighted: false,
      },
      {
        id: 'terceros',
        name: 'Terceros Completo',
        tagline: 'La mejor opción para el Kardian en ciudad',
        badge: 'Más popular',
        features: [
          'Todo lo de Responsabilidad Civil',
          'Robo e incendio total del vehículo',
          'Granizo sin franquicia',
          'Asistencia mecánica y grúa 24/7',
          'Gestión de siniestro 100% digital',
        ],
        price: 38_000,
        highlighted: true,
      },
      {
        id: 'todo-riesgo',
        name: 'Todo Riesgo',
        tagline: 'Sin sorpresas ante cualquier imprevisto',
        features: [
          'Todo lo de Terceros Completo',
          'Daños parciales al propio vehículo',
          'Cristales y sensores de parking',
          'Auto de reemplazo hasta 5 días',
          'Valor de reposición primer año',
        ],
        price: 58_000,
        highlighted: false,
      },
    ],
    faqs: [
      {
        question: '¿El Renault Kardian es barato de asegurar?',
        answer: 'Sí, el Kardian tiene una prima muy competitiva por su segmento. En Terceros Completo, con cobertura de robo y granizo, podés pagar desde $38.000/mes, que es uno de los valores más bajos en SUVs.',
      },
      {
        question: '¿Los sensores de parking del Kardian están cubiertos?',
        answer: 'En el plan Todo Riesgo, los sensores de estacionamiento y la cámara de reversa de fábrica están incluidos en el valor asegurado sin costo adicional.',
      },
      {
        question: '¿Vale la pena asegurar el Kardian usado contra Todo Riesgo?',
        answer: 'Para el Kardian con hasta 2 años de antigüedad, el Todo Riesgo es muy conveniente. A partir del 3er año, te recomendamos evaluar si la prima del Todo Riesgo sigue siendo proporcional al valor del vehículo.',
      },
      {
        question: '¿Cómo funciona la gestión digital del siniestro?',
        answer: 'Con nuestras aseguradoras asociadas podés hacer toda la denuncia desde el celular: fotos, formulario y seguimiento del expediente en tiempo real. Te acompañamos en cada paso del proceso.',
      },
      {
        question: '¿Tengo cobertura inmediata si contrato hoy?',
        answer: 'Sí. Una vez aprobada la póliza y acreditado el primer pago, la cobertura es inmediata. Te mandamos el certificado digital al instante para que lo tengas en el acto.',
      },
    ],
    waText: 'Hola Carla, vengo de la web. Tengo un Renault Kardian y quiero la recotización mejorada.',
    seoTitle: 'Seguro Renault Kardian en Rosario — Cotizá con Carla Vignale | PAS SSN',
    seoDescription: 'Seguro para Renault Kardian desde $24.000/mes. Ahorrá hasta 40% al recotizar. PAS matriculada N° 7192. Cotizá gratis en Rosario, Santa Fe.',
  },
};

// ─────────────────────────────────────────────────────────────
// Service
// ─────────────────────────────────────────────────────────────
@Injectable({ providedIn: 'root' })
export class InsuranceService {

  getBrand(slug: string): BrandData | null {
    return BRANDS[slug] ?? null;
  }

  getAllSlugs(): string[] {
    return Object.keys(BRANDS);
  }

  /** Formatea ARS con separador de miles, sin decimales */
  formatARS(value: number): string {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  }

  /** Porcentaje de ahorro entre precio de mercado y precio Carla */
  savingsPercent(market: number, carla: number): number {
    return Math.round(((market - carla) / market) * 100);
  }

  /** Genera el href de WhatsApp prellenado */
  waHref(text: string, phone = '5493416055454'): string {
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  }
}
