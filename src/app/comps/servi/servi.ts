// src/app/comps/servi/servi.ts
import { Component } from '@angular/core';
import {
  NgFor,
  NgClass,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
} from '@angular/common';
import { FormsModule } from '@angular/forms';

type ServiId =
  | 'auto'
  | 'moto'
  | 'embarcaciones'
  | 'hogar'
  | 'incendio'
  | 'caucion'
  | 'accidentes'
  | 'vida'
  | 'mala-praxis'
  | 'mascota'
  | 'viajes'
  | 'art';

interface ServiItem {
  id: ServiId;
  name: string;
  emoji: string;
}

@Component({
  selector: 'app-servi',
  standalone: true,
  imports: [
    NgFor,
    NgClass,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    FormsModule,
  ],
  templateUrl: './servi.html',
  styleUrl: './servi.scss',
})
export class Servi {
  services: ServiItem[] = [
    { id: 'auto',           name: 'Automotor',             emoji: '🚗' },
    { id: 'moto',           name: 'Moto',                  emoji: '🏍️' },
    { id: 'embarcaciones',  name: 'Embarcaciones',         emoji: '🚤' },
    { id: 'hogar',          name: 'Hogar',                 emoji: '🏠' },
    { id: 'incendio',       name: 'Incendio',              emoji: '🔥' },
    { id: 'caucion',        name: 'Caución',               emoji: '🏢' },
    { id: 'accidentes',     name: 'Accidentes Personales', emoji: '🩺' },
    { id: 'vida',           name: 'Vida',                  emoji: '❤️' },
    { id: 'mala-praxis',    name: 'Mala Praxis',           emoji: '⚕️' },
    { id: 'mascota',        name: 'Mascota',               emoji: '🐾' },
    { id: 'viajes',         name: 'Viajes',                emoji: '✈️' },
    { id: 'art',            name: 'ART',                   emoji: '💼' },
  ];

  selectedId: ServiId | null = null;

  // mismo número que usás en WaFab
  readonly phone = '5493416055454';

  // Formularios específicos
  autoMoto = {
    auto: { marca: '', modelo: '', anio: '' },
    moto: { marca: '', modelo: '', anio: '' },
  };

  embarcacion = { eslora: '', motor: '' };

  select(item: ServiItem): void {
    // toggle: si vuelvo a hacer click, se cierra
    this.selectedId = this.selectedId === item.id ? null : item.id;
  }

  isSelected(item: ServiItem): boolean {
    return this.selectedId === item.id;
  }

  waHref(item: ServiItem): string {
    const text = this.buildMessage(item);
    return `https://wa.me/${this.phone}?text=${encodeURIComponent(text)}`;
  }

  private buildMessage(item: ServiItem): string {
    switch (item.id) {
      case 'auto': {
        const f = this.autoMoto.auto;
        return `Quiero una cotización sobre mi auto marca ${f.marca || '(sin marca)'} modelo ${f.modelo || '(sin modelo)'} del año ${f.anio || '(sin año)'}.`;
      }
      case 'moto': {
        const f = this.autoMoto.moto;
        // tal cual lo pediste:
        return `Quiero una cotización sobre mi moto marca ${f.marca || '(sin marca)'} del modelo ${f.modelo || '(sin modelo)'} del año ${f.anio || '(sin año)'}.`;
      }
      case 'embarcaciones': {
        const f = this.embarcacion;
        return `Quiero una cotización para mi embarcación de eslora ${f.eslora || '(sin eslora)'} con motor ${f.motor || '(sin motor)'}.`;
      }
      default:
        return `Quiero una cotización de seguro de ${item.name}.`;
    }
  }
}
