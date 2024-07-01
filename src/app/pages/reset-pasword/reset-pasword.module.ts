import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResetPaswordPageRoutingModule } from './reset-pasword-routing.module';

import { ResetPaswordPage } from './reset-pasword.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResetPaswordPageRoutingModule
  ],
  declarations: [ResetPaswordPage]
})
export class ResetPaswordPageModule {}
