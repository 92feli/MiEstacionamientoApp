import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PaginaprotegidaGuard } from './guards/paginaprotegida.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'homes',
    loadChildren: () => import('./homes/homes.module').then( m => m.HomesPageModule),
    canActivate:[PaginaprotegidaGuard]
  },
  {
    path: 'registro-cliente',
    loadChildren: () => import('./pages/registro-cliente/registro-cliente.module').then( m => m.RegistroClientePageModule)
  },
  {
    path: 'registro-duenio',
    loadChildren: () => import('./pages/registro-duenio/registro-duenio.module').then( m => m.RegistroDuenioPageModule)
  },
  {
    path: 'transacciones',
    loadChildren: () => import('./pages/transacciones/transacciones.module').then( m => m.TransaccionesPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'recuperar-contrasena',
    loadChildren: () => import('./pages/recuperar-contrasena/recuperar-contrasena.module').then( m => m.RecuperarContrasenaPageModule)
  },
  {
    path: 'not-found',
    loadChildren: () => import('./pages/not-found/not-found.module').then( m => m.NotFoundPageModule)
  },
  {
    path: 'duenio-home',
    loadChildren: () => import('./pages/duenio-home/duenio-home.module').then( m => m.DuenioHomePageModule)
  },
  {//esta va al final sino no lee las paginas XDDDDD
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full'
  },  {
    path: 'prueba',
    loadChildren: () => import('./pages/prueba/prueba.module').then( m => m.PruebaPageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
