import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservaClientePage } from './reserva-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: ReservaClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservaClientePageRoutingModule {}
