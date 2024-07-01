import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResetPaswordPage } from './reset-pasword.page';

const routes: Routes = [
  {
    path: '',
    component: ResetPaswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResetPaswordPageRoutingModule {}
