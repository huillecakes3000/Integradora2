import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  ionViewDidEnter() {
    this.initializeChart1();
    this.initializeChart2();
  
  }

  private initializeChart1() {
    const chartOptions1: Highcharts.Options = {
      chart: {
        type: 'line'
      },
      title: {
        text: ''
      },
      xAxis: {
        categories: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
      },
      yAxis: {
        title: {
          text: 'Humedad y Temperatura'
        }
      },
      series: [{
        name: 'Humedad',
        data: [98, 71.5, 85, 80, 75, 90, 67],
        type: 'line' // Añadir el tipo de serie correctamente
      }, {
        name: 'Temperatura',
        data: [38.5, 22.9, 35.9, 30.0, 29.9, 28.7, 28.9],
        type: 'line' // Añadir el tipo de serie correctamente
      }]
    };

    Highcharts.chart('chartContainer1', chartOptions1);
  }

  private initializeChart2() {
    const chartOptions2: Highcharts.Options = {
      chart: {
        type: 'line'
      },
      title: {
        text: ''
      },
      xAxis: {
        categories: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
      },
      yAxis: {
        title: {
          text: 'Humedad y Temperatura'
        }
      },
      series: [{
        name: 'Humedad',
        data: [98, 100, 85, 80, 90, 70, 90],
        type: 'line' // Añadir el tipo de serie correctamente
      }, {
        name: 'Tempertura',
        data: [25, 28, 20, 20, 15, 18, 28],
        type: 'line' // Añadir el tipo de serie correctamente
      }]
    };

    Highcharts.chart('chartContainer2', chartOptions2);
  }

}