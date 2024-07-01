import { Component, AfterViewInit, ElementRef } from '@angular/core';
import lottie, { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-correoalready',
  templateUrl: './correoalready.page.html',
  styleUrls: ['./correoalready.page.scss'],
})
export class CorreoalreadyPage implements AfterViewInit {
  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    // Obtener el elemento del DOM usando ElementRef
    const container = this.elementRef.nativeElement.querySelector('#lottie-animation-already');

    if (container) {
      lottie.loadAnimation({
        container: container,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://lottie.host/8efd1c4f-45b5-43f9-8f72-7e23db31032b/QKKYyPG1zL.json',
      });
    } else {
      console.error('No se encontró el elemento con ID lottie-animation');
    }
  }
}