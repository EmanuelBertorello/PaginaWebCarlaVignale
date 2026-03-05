// src/app/comps/cv/cv.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cv.html',
  styleUrl: './cv.scss',
})
export class Cv {
  // Imagen libre asociada a seguros
  imgUrl =
    'https://images.pexels.com/photos/3184396/pexels-photo-3184396.jpeg?auto=compress&cs=tinysrgb&w=1200';

<<<<<<< HEAD
  // WhatsApp (MISMO formato que WaFab)
  readonly phone = '5493416055454';
  readonly text = 'Hola Carla, ¿qué tal? Te adjunto mi CV!';

  get waHref(): string {
    return `https://wa.me/${this.phone}?text=${encodeURIComponent(this.text)}`;
=======
  showForm = false;          // controla el slide del formulario
  selectedFile: File | null = null;
  sending = false;
  successMsg = '';
  errorMsg = '';

  toggleForm() {
    this.showForm = !this.showForm;
    this.successMsg = '';
    this.errorMsg = '';
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) {
      this.selectedFile = null;
      return;
    }

    const file = input.files[0];

    if (file.type !== 'application/pdf') {
      this.errorMsg = 'Solo se permiten archivos PDF.';
      this.selectedFile = null;
      return;
    }

    this.errorMsg = '';
    this.selectedFile = file;
  }

  onSubmit() {
    if (!this.selectedFile) {
      this.errorMsg = 'Adjuntá tu CV en PDF antes de enviar.';
      return;
    }

    this.sending = true;
    this.errorMsg = '';
    this.successMsg = '';

    const formData = new FormData();
    formData.append('cv', this.selectedFile);
    formData.append('to', 'carvignale@gmail.com');

    // 👉 Cambiá la URL por la de tu backend real
    fetch('http://localhost/cv-upload.php', {
      method: 'POST',
      body: formData,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Error al enviar el CV');
        }
        return res.text();
      })
      .then(() => {
        this.successMsg = 'CV enviado correctamente. ¡Gracias!';
        this.selectedFile = null;
        this.sending = false;
      })
      .catch(() => {
        this.errorMsg =
          'Hubo un problema al enviar el CV. Intentá de nuevo más tarde.';
        this.sending = false;
      });
>>>>>>> 9ce6e90 (final)
  }
}
