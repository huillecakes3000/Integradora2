import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatusGroundPageRoutingModule } from './status-ground-routing.module';

import { StatusGroundPage } from './status-ground.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatusGroundPageRoutingModule
  ],
  declarations: [StatusGroundPage]
})
export class StatusGroundPageModule {}
