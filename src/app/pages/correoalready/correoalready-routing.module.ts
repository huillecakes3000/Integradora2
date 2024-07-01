import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorreoalreadyPage } from './correoalready.page';

const routes: Routes = [
  {
    path: '',
    component: CorreoalreadyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorreoalreadyPageRoutingModule {}
