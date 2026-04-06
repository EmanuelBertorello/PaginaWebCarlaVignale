import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

interface Kpi {
  value: string;
  label: string;
  note?: string;
}

@Component({
  selector: 'app-stats-strip',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './stats-strip.html',
  styleUrl: './stats-strip.scss',
})
export class StatsStrip {
  kpis: Kpi[] = [
    { value: '+1.200',  label: 'Clientes activos',         note: 'En todo el país' },
    { value: '9',       label: 'Aseguradoras asociadas',   note: 'Las mejores del mercado' },
    { value: '40%',     label: 'Ahorro promedio',          note: 'Al recotizar con Carla' },
    { value: '15+',     label: 'Años de experiencia',      note: 'PAS Matrícula N° 7192' },
    { value: '48%',     label: 'Inflación de pólizas',     note: 'Anual — recotizá hoy' },
  ];
}
