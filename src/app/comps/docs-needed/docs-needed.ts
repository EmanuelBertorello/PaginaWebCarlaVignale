import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

interface DocItem {
  title: string;
}

@Component({
  selector: 'app-docs-needed',
  standalone: true,
  imports: [NgFor],
  templateUrl: './docs-needed.html',
  styleUrl: './docs-needed.scss',
})
export class DocsNeeded {
  requiredDocs: DocItem[] = [
    { title: 'DNI del reclamante' },
    { title: 'Contacto del tercero' },
    { title: 'Licencia del conductor al momento del accidente' },
    { title: 'Cédula verde del vehículo o boleto de compraventa certificado por autoridad competente' },
    { title: 'Denuncia de siniestro y constancia de cobertura selladas por la compañía aseguradora' },
    { title: 'Fotos donde se aprecien los daños sufridos a raíz del accidente' },
  ];

  optionalDocs: DocItem[] = [
    { title: 'Presupuesto de reparación' },
    { title: 'Denuncia policial (en caso de existir)' },
    { title: 'Constancia de CBU en caso de arribar a futuro acuerdo' },
    { title: 'Carta de Franquicia sellada por la compañía aseguradora' },
  ];
}
