import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmailSendPage } from './email-send.page';

const routes: Routes = [
  {
    path: '',
    component: EmailSendPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmailSendPageRoutingModule {}
