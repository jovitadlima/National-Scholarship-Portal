import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OfficerLogin } from 'src/app/models/OfficerLogin';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-officer-login',
  templateUrl: './officer-login.component.html',
  styleUrls: ['./officer-login.component.css'],
})
export class OfficerLoginComponent implements OnInit {
  officerLoginModel = new OfficerLogin();
  responseMessage: string = '';

  constructor(
    private _authenticationService: AuthenticationService,
    private _router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('Inside officer login');
    this._authenticationService.loginOfficer(this.officerLoginModel).subscribe(
      (response: any) => {
        console.log('data from server :: officer login', response.token);
        localStorage.setItem('authToken', response.token);
        this._router.navigate(['/officerDashboard']);
      },
      (error) => (this.responseMessage = error.statusText)
    );
  }
}
