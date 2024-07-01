import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmailSendPageRoutingModule } from './email-send-routing.module';

import { EmailSendPage } from './email-send.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmailSendPageRoutingModule
  ],
  declarations: [EmailSendPage]
})
export class EmailSendPageModule {}
