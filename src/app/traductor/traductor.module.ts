import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TraductorPageRoutingModule } from './traductor-routing.module';

import { TraductorPage } from './traductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TraductorPageRoutingModule
  ],
  declarations: [TraductorPage]
})
export class TraductorPageModule {}
