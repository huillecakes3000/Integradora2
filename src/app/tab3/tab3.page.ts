import { Component } from '@angular/core';
import { AlertButton } from '@ionic/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  alertButtons: AlertButton[] = [
    {
      text: 'Cancelar',
      role: 'cancel',
      cssClass: 'secondary',
    },
    {
      text: 'Aceptar',
      handler: () => {
        console.log('Botón Aceptar presionado');
        // Aquí puedes agregar la lógica que deseas ejecutar cuando se presiona el botón Aceptar
      },
    },
  ];

  constructor() {}
  

  // Método que maneja el evento didDismiss del alert
  setResult(event: any) {
    console.log('Evento didDismiss:', event);
    // Aquí puedes manejar el resultado del alert
  }
}
