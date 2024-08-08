import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddgroundPageRoutingModule } from './addground-routing.module';

import { AddgroundPage } from './addground.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddgroundPageRoutingModule
  ],
  declarations: [AddgroundPage]
})
export class AddgroundPageModule {}
