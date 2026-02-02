import { Component } from '@angular/core';

import { HeroApp } from '../../comps/hero-app/hero-app';
import { Servi } from '../../comps/servi/servi';
import { DocsNeeded } from '../../comps/docs-needed/docs-needed';
import { Info } from '../../comps/info/info';
import { StatsStrip } from '../../comps/stats-strip/stats-strip';
import { Carrusel } from '../../comps/carrusel/carrusel';
import { Cv } from '../../comps/cv/cv';
import { WaFab } from '../../comps/wa-fab/wa-fab';

type Provider = { name: string; subtitle: string; logo: string };

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroApp,
    Servi,
    DocsNeeded,
    Info,
    StatsStrip,
    Carrusel,
    Cv,WaFab
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  providers: Provider[] = [
    {
      name: 'Galeno Seguros',
      subtitle: 'Coberturas integrales para salud, vida y patrimonio',
      logo: 'https://seguru.com.ar/wp-content/uploads/2022/05/galeno1.svg',
    },
    {
      name: 'Río Uruguay Seguros (RUS)',
      subtitle: 'Cooperativa líder en seguros generales',
      logo: 'https://images.seeklogo.com/logo-png/29/1/rio-uruguay-seguros-logo-png_seeklogo-296139.png',
    },
    {
      name: 'Sancor Seguros',
      subtitle: 'Respaldando personas y empresas en todo el país',
      logo: 'https://images.seeklogo.com/logo-png/15/1/sancor-seguros-logo-png_seeklogo-157838.png',
    },
    {
      name: 'La Caja de Ahorro y Seguro',
      subtitle: 'Seguros para autos, hogar y vida',
      logo: 'https://www.issys.gov.ar/wp-content/uploads/2023/07/images-2.png',
    },
    {
      name: 'Zurich Seguros',
      subtitle: 'Soluciones globales con presencia local',
      logo: 'https://images.seeklogo.com/logo-png/15/1/zurich-logo-png_seeklogo-156664.png',
    },
    {
      name: 'Allianz Argentina',
      subtitle: 'Coberturas corporativas y personales',
      logo: 'https://images.seeklogo.com/logo-png/48/1/allianz-logo-png_seeklogo-485293.png',
    },
    {
      name: 'Berkley',
      subtitle: 'Coberturas corporativas y personales',
      logo: 'https://www.cspseguros.com.ar/wp-content/uploads/2019/08/Berkley.png',
    },
    {
      name: 'Experta ART',
      subtitle: 'Coberturas corporativas y personales',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNwbuZBVZJsnIfldnPkE8KWNkSuEkW9ywVlg&s',
    },
    {
      name: 'Swiss Medical',
      subtitle: 'Coberturas corporativas y personales',
      logo: 'https://www.miobrasocial.com.ar/wp-content/uploads/2025/01/swiss-medical-logo-2025.png',
    },
  ];
}
