import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {



  constructor(private router: Router, private service: UsersService, private toastr: ToastrService) { }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.service.isLoggedIn()) {

      if (route.url.length > 0) {
        let menu = route.url[0].path;
        if (menu == 'users' || menu == 'listusers') {
          if (this.service.getUserrole() == 'admin') {
            return true;
          } else {
            this.toastr.warning('You are not authorized to access this page');
            this.router.navigate(['dashboard']);
            return false;
          }
        } 
        else {
          return true;
        }

      } 
      else {
        return true;
      }
    } else {
      this.router.navigate(['home']);
      return false;
    }
  }

}
