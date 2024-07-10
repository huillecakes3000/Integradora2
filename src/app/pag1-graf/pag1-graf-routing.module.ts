import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pag1GrafPage } from './pag1-graf.page';

const routes: Routes = [
  {
    path: '',
    component: Pag1GrafPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pag1GrafPageRoutingModule {}
