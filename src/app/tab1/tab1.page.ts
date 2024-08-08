import { Component , OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface Dato {
  valor: number;
}
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  Humedad: number | null = null;
  Temperatura: number | null = null;
  constructor(
    private http: HttpClient
  ) {}
  ngOnInit(): void {
    this.mostrarDatosHumedad();
    this.mostrarDatosTemperatura();
  }

  mostrarDatosHumedad() {
    this.http.get<{datos: number}>('http://localhost:5000/datos_Humedad').subscribe(
      response => {
        this.Humedad = response.datos;
      },
      error => {
        console.error('Error al obtener datos de humedad', error);
        this.Humedad = null; // Opcional: Manejo de errores
      }
    );
  }

  mostrarDatosTemperatura() {
    this.http.get<{datos: number}>('http://localhost:5000/datos_Temperatura').subscribe(
      response => {
        this.Temperatura = response.datos;
      },
      error => {
        console.error('Error al obtener datos de temperatura', error);
        this.Temperatura = null; // Opcional: Manejo de errores
      }
    );
  }
}

