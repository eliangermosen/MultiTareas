import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MultiplicadorPage } from './multiplicador.page';

const routes: Routes = [
  {
    path: '',
    component: MultiplicadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MultiplicadorPageRoutingModule {}
