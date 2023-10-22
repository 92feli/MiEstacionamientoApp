import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { LoginPage } from '../pages/login/login.page';
import { DuenioHomePage } from '../pages/duenio-home/duenio-home.page';
import { NotFoundPage } from '../pages/not-found/not-found.page';
import { PruebaPage } from '../pages/prueba/prueba.page';
import { RecuperarContrasenaPage } from '../pages/recuperar-contrasena/recuperar-contrasena.page';
import { RegistroPage } from '../pages/registro/registro.page';
import { RegistroClientePage } from '../pages/registro-cliente/registro-cliente.page';
import { RegistroDuenioPage } from '../pages/registro-duenio/registro-duenio.page';
import { SplashPage } from '../pages/splash/splash.page';
import { TransaccionesPage } from '../pages/transacciones/transacciones.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[

      {
        path: 'duenio-home',
        component: DuenioHomePage
      },

      {
        path : 'login',
        component: LoginPage
      },

      {
        path: 'not-found',
        component: NotFoundPage
      },

      {
        path: 'prueba',
        component: PruebaPage
      },

      {
        path: 'recuperar-contrasena',
        component: RecuperarContrasenaPage
      },

      {
        path: 'registro',
        component: RegistroPage
      },

      {
        path: 'registro-cliente',
        component: RegistroClientePage
      },

      {
        path: 'registro-duenio',
        component: RegistroDuenioPage
      },

      {
        path: 'splash',
        component: SplashPage
      },

      {
        path: 'transacciones',
        component: TransaccionesPage
      },




    ]


  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
