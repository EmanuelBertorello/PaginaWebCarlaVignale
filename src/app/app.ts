import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Navbar } from './comps/navbar/navbar';
import { Footer } from './comps/footer/footer';
import { WaFab } from './comps/wa-fab/wa-fab';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, RouterOutlet, Footer, WaFab],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('carlav');
}
