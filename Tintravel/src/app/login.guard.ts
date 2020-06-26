import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private userService: UserService,
    private router: Router) { }

  canActivate() {
    if (this.userService.getToken()) {
      // login TRUE
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
