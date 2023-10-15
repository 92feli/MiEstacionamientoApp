import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroDuenioPageRoutingModule } from './registro-duenio-routing.module';

import { RegistroDuenioPage } from './registro-duenio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroDuenioPageRoutingModule
  ],
  declarations: [RegistroDuenioPage]
})
export class RegistroDuenioPageModule {}

