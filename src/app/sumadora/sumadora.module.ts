import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SumadoraPageRoutingModule } from './sumadora-routing.module';

import { SumadoraPage } from './sumadora.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SumadoraPageRoutingModule
  ],
  declarations: [SumadoraPage]
})
export class SumadoraPageModule {}
