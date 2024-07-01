import { Component, AfterViewInit, ElementRef } from '@angular/core';
import lottie, { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements AfterViewInit {
  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    // Obtener el elemento del DOM usando ElementRef
    const container = this.elementRef.nativeElement.querySelector('#lottie-animation');

    if (container) {
      lottie.loadAnimation({
        container: container,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://lottie.host/74c1c2f4-71e4-44ab-af65-b4350e41b199/9rJ3x7zzt4.json',
      });
    } else {
      console.error('No se encontró el elemento con ID lottie-animation');
    }
  }
}