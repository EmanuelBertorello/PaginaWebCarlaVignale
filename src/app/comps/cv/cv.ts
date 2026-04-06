// src/app/comps/cv/cv.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [],
  templateUrl: './cv.html',
  styleUrl: './cv.scss',
})
export class Cv {
  imgUrl =
    'https://images.pexels.com/photos/3184396/pexels-photo-3184396.jpeg?auto=compress&cs=tinysrgb&w=1200';

  readonly phone = '5493416055454';
  readonly text = 'Hola Carla, ¿qué tal? Te adjunto mi CV!';

  get waHref(): string {
    return `https://wa.me/${this.phone}?text=${encodeURIComponent(this.text)}`;
  }
}
