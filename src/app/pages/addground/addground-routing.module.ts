import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddgroundPage } from './addground.page';

const routes: Routes = [
  {
    path: '',
    component: AddgroundPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddgroundPageRoutingModule {}
