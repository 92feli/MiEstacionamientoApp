import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DuenioHomePageRoutingModule } from './duenio-home-routing.module';

import { DuenioHomePage } from './duenio-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DuenioHomePageRoutingModule
  ],
  declarations: [DuenioHomePage]
})
export class DuenioHomePageModule {}
