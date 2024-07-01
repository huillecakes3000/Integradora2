import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PorfilePage } from './porfile.page';

const routes: Routes = [
  {
    path: '',
    component: PorfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PorfilePageRoutingModule {}
