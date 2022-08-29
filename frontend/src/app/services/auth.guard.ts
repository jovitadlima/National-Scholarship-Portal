import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private _authenticationService: AuthenticationService,
    private _router: Router
  ) {}

  canActivate(): boolean {
    if (this._authenticationService.isLoggedIn()) {
      console.log('true');
      return true;
    } else {
      console.log('false');
      this._router.navigate(['/']);
      return false;
    }
  }
}
