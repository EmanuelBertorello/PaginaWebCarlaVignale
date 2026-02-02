import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type CoverageKey =
  | 'auxilio_mecanico'
  | 'robo_total'
  | 'robo_parcial'
  | 'incendio_total'
  | 'danio_total';

type ColumnDef = {
  key: CoverageKey;
  label: string; // sin abreviaturas
  info?: string;
};

type QuoteRow = {
  id: string;

  logoText: string;
  planName: string;
  ratingLabel: string;

  price: number;
  oldPrice: number;
  discountPct: number;

  coverages: Record<CoverageKey, boolean>;
};

type PriceBand = {
  id: string;
  label: string;
  min: string;     // texto (ej: "1.138")
  max: string;     // texto (ej: "8.334")
  minW: number;    // ancho relativo %
  maxW: number;    // ancho relativo %
};

@Component({
  selector: 'app-amarok',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './amarok.html',
  styleUrl: './amarok.scss',
})
export class Amarok {
  // =========================
  // Tabla (cols / rows)
  // =========================
  cols: ColumnDef[] = [
    {
      key: 'auxilio_mecanico',
      label: 'Auxilio mecánico',
      info: 'Incluye asistencia en ruta o remolque, según condiciones de la póliza.',
    },
    {
      key: 'robo_total',
      label: 'Robo total',
      info: 'Cubre la pérdida total del vehículo por robo, según condiciones de la póliza.',
    },
    {
      key: 'robo_parcial',
      label: 'Robo parcial',
      info: 'Cubre el robo de partes o accesorios, según condiciones de la póliza.',
    },
    {
      key: 'incendio_total',
      label: 'Incendio total',
      info: 'Cubre pérdida total por incendio, según condiciones de la póliza.',
    },
    {
      key: 'danio_total',
      label: 'Daño total',
      info: 'Cubre pérdida total por daños, según condiciones y franquicia.',
    },
  ];

  rows: QuoteRow[] = [
    {
      id: 'zurich',
      logoText: 'ZURICH',
      planName: 'Terceros básicos',
      ratingLabel: 'Bueno 8.3',
      price: 19751,
      oldPrice: 30306,
      discountPct: 35,
      coverages: {
        auxilio_mecanico: true,
        robo_total: true,
        robo_parcial: false,
        incendio_total: true,
        danio_total: true,
      },
    },
    {
      id: 'orbis',
      logoText: 'ORBIS',
      planName: 'Terceros básicos',
      ratingLabel: 'Bueno 8.0',
      price: 15688,
      oldPrice: 24130,
      discountPct: 35,
      coverages: {
        auxilio_mecanico: true,
        robo_total: true,
        robo_parcial: true,
        incendio_total: true,
        danio_total: true,
      },
    },
    {
      id: 'provincia',
      logoText: 'PROVINCIA',
      planName: 'Terceros básicos',
      ratingLabel: 'Bueno 8.2',
      price: 16669,
      oldPrice: 25645,
      discountPct: 35,
      coverages: {
        auxilio_mecanico: false,
        robo_total: true,
        robo_parcial: true,
        incendio_total: true,
        danio_total: true,
      },
    },
    {
      id: 'nacion',
      logoText: 'NACIÓN',
      planName: 'Terceros básicos',
      ratingLabel: 'Bueno 6.9',
      price: 20311,
      oldPrice: 31240,
      discountPct: 35,
      coverages: {
        auxilio_mecanico: true,
        robo_total: true,
        robo_parcial: true,
        incendio_total: true,
        danio_total: false,
      },
    },
    {
      id: 'mapfre',
      logoText: 'MAPFRE',
      planName: 'Terceros básicos',
      ratingLabel: 'Bueno 7.5',
      price: 22832,
      oldPrice: 35127,
      discountPct: 35,
      coverages: {
        auxilio_mecanico: true,
        robo_total: true,
        robo_parcial: false,
        incendio_total: true,
        danio_total: true,
      },
    },
    {
      id: 'rus',
      logoText: 'RUS',
      planName: 'Terceros básicos',
      ratingLabel: 'Bueno 7.7',
      price: 20871,
      oldPrice: 32140,
      discountPct: 35,
      coverages: {
        auxilio_mecanico: true,
        robo_total: true,
        robo_parcial: true,
        incendio_total: true,
        danio_total: true,
      },
    },
  ];

  // =========================
  // Bloque “Factores” (lo usa tu HTML)
  // =========================
  priceBands: PriceBand[] = [
    { id: 'b1', label: 'Hasta 1.5 millones',       min: '1.138', max: '8.334',  minW: 50, maxW: 50 },
    { id: 'b2', label: 'Desde 1.5 a 2.5 millones', min: '1.134', max: '12.452', minW: 45, maxW: 55 },
    { id: 'b3', label: 'Desde 2.5 a 3.5 millones', min: '1.134', max: '14.657', minW: 45, maxW: 55 },
    { id: 'b4', label: 'Desde 3.5 millones',       min: '847',   max: '44.743', minW: 30, maxW: 70 },
  ];

  // =========================
  // TrackBy
  // =========================
  trackByRow = (_: number, r: QuoteRow) => r.id;
  trackByBand = (_: number, b: PriceBand) => b.id;

  // =========================
  // Helpers
  // =========================
  formatARS(value: number): string {
    if (value === null || value === undefined || Number.isNaN(value)) return '0';
    return new Intl.NumberFormat('es-AR', {
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    }).format(value);
  }

  // Si todavía lo usabas en el template viejo, lo dejo para no romper
  onView(row: QuoteRow): void {
    console.log('Ver detalle:', row.id, row);
  }

  // Si lo usabas antes (CTA), lo dejo por compatibilidad
  onQuote(row: QuoteRow): void {
    console.log('Cotizar:', row.id, row);
  }
}
