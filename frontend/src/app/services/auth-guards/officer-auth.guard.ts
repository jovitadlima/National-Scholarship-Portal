import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Injectable()
export class OfficerAuthGuard implements CanActivate {
  constructor(
    private _authenticationService: AuthenticationService,
    private _router: Router
  ) {}

  canActivate(): boolean {
    if (this._authenticationService.isLoggedIn()) {
      let token = localStorage.getItem('authToken');
      let claims = JSON.parse(atob(token!.split('.')[1]));
      let role =
        claims['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
      console.log('Role is ', role);

      if (role === 'Officer') {
        console.log('true');
        return true;
      } else {
        console.log('false');
        return false;
      }
    } else {
      console.log('false');
      this._router.navigate(['/']);
      return false;
    }
  }
}
