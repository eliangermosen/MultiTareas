import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MultiplicadorPageRoutingModule } from './multiplicador-routing.module';

import { MultiplicadorPage } from './multiplicador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MultiplicadorPageRoutingModule
  ],
  declarations: [MultiplicadorPage]
})
export class MultiplicadorPageModule {}
