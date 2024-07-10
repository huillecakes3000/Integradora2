import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pag1GrafPageRoutingModule } from './pag1-graf-routing.module';

import { Pag1GrafPage } from './pag1-graf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pag1GrafPageRoutingModule
  ],
  declarations: [Pag1GrafPage]
})
export class Pag1GrafPageModule {}
