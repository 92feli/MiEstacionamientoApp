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
    
    
      if( this.ngFireAuth.currentUser){

        alert("Testeo OK")
        return true;
      }
      else{
        alert("debe Loguearse")
        return false;
      }

  }
  
}
