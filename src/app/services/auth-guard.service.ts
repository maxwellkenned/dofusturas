import { Injectable } from '@angular/core';
import { MonturasService } from "./monturas.service";
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor( private monturasService: MonturasService, private router:Router  ) { }

  canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot){
  
    if(this.monturasService.sesionactiva){
      return true;
    }else{
      alert("Error de seguridad - Debe iniciar sesión");
      this.router.navigate(['/login']);
      return false;
    }
  }
}
