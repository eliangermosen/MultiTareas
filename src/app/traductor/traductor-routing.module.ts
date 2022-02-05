import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TraductorPage } from './traductor.page';

const routes: Routes = [
  {
    path: '',
    component: TraductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TraductorPageRoutingModule {}
