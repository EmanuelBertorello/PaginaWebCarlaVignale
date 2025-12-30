import { Component, signal } from '@angular/core';
import { DocsNeeded } from './comps/docs-needed/docs-needed';
import { Cv } from './comps/cv/cv';
import { Navbar } from './comps/navbar/navbar';
import { Footer } from './comps/footer/footer';
import { WaFab } from './comps/wa-fab/wa-fab';
import { HeroApp } from './comps/hero-app/hero-app';
import { Info } from './comps/info/info';
import { Carrusel } from './comps/carrusel/carrusel';
import { StatsStrip } from './comps/stats-strip/stats-strip';
import { Servi } from './comps/servi/servi';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Navbar,
    Footer,
    WaFab,
    HeroApp,
    Info,
    Carrusel,
    StatsStrip,
    Servi,
     DocsNeeded,
     Cv
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('carlav');

  providers = [
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
      name: 'Federación Patronal',
      subtitle: 'Aseguradora tradicional del mercado argentino',
      logo: 'https://scontent.fros9-1.fna.fbcdn.net/v/t39.30808-1/575112610_1239634794861784_6987683582917276193_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=101&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=1E7vL41CE58Q7kNvwFVe0C9&_nc_oc=AdmTfY2ACy4aL6cgiY8aTL1fMeVy28rC5MGQVIbvvPBbkYI61XNa_6CmPUgQELlFPCE0OV_1wT6stjc1xGOqEvRM&_nc_zt=24&_nc_ht=scontent.fros9-1.fna&_nc_gid=ihhf1PZ6ETKEmFjb61u5aQ&oh=00_Afj1fpFHRl5nQIHg5yNpNsskohbPsY6AuFhVQE9cupBmzw&oe=691EE264',
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
     { name: 'Berkley', subtitle: 'Coberturas corporativas y personales',  logo: 'https://www.cspseguros.com.ar/wp-content/uploads/2019/08/Berkley.png' },
    { name: 'Experta ART',  subtitle: 'Coberturas corporativas y personales', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNwbuZBVZJsnIfldnPkE8KWNkSuEkW9ywVlg&s' },
     { name: 'swiss Medical',  subtitle: 'Coberturas corporativas y personales', logo: 'https://www.miobrasocial.com.ar/wp-content/uploads/2025/01/swiss-medical-logo-2025.png' }
  ];
}
