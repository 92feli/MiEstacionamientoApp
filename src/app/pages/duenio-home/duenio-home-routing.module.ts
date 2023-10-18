import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DuenioHomePage } from './duenio-home.page';

const routes: Routes = [
  {
    path: '',
    component: DuenioHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DuenioHomePageRoutingModule {}
