import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorreoalreadyPageRoutingModule } from './correoalready-routing.module';

import { CorreoalreadyPage } from './correoalready.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorreoalreadyPageRoutingModule
  ],
  declarations: [CorreoalreadyPage]
})
export class CorreoalreadyPageModule {}
