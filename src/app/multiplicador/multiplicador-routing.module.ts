import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MultiplicadorPage } from './multiplicador.page';

const routes: Routes = [
  {
    path: '',
    component: MultiplicadorPage
  },
  {
    path: 'tabla',
    loadChildren: () => import('./tabla/tabla.module').then( m => m.TablaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MultiplicadorPageRoutingModule {}
