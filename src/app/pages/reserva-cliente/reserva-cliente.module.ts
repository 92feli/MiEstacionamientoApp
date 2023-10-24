import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservaClientePageRoutingModule } from './reserva-cliente-routing.module';

import { ReservaClientePage } from './reserva-cliente.page';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservaClientePageRoutingModule,
    QRCodeModule
  ],
  declarations: [ReservaClientePage]
})
export class ReservaClientePageModule {}
