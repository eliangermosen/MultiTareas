import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SumadoraPage } from './sumadora.page';

const routes: Routes = [
  {
    path: '',
    component: SumadoraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SumadoraPageRoutingModule {}
