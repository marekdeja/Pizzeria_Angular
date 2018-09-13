import { LoginService } from './../services/login.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
private service: LoginService,
  ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
      if(this.service.loggedIn){
        console.log("true dla autoryzacji");
        return true;
      }
      else{
        console.log("false dla autoryzacji");
        return false;
      }
  }
}
