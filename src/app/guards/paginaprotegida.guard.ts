import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AngularFireAuth} from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})


export class PaginaprotegidaGuard implements CanActivate {

  constructor(public ngFireAuth: AngularFireAuth) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    /* Se intenta Crear Logica de Validacion con ngFireAuth de Firebase para que solo permitiera navegar al homes mediante el inicio de sesion ,
      pero finalmente no funciona. 


      if( this.ngFireAuth.currentUser){

        //alert("Testeo OK")
        console.log("Testeo OK")
        return true;
      }
      else{
        //alert("debe Loguearse")
        console.log("debe Loguearse")
        return false;
      }
      
    */  

      return true ;
  }
  
}
