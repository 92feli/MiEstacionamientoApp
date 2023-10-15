import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroDuenioPage } from './registro-duenio.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroDuenioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroDuenioPageRoutingModule {}
