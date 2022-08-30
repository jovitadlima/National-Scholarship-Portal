import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MinistryLogin } from 'src/app/models/MinistryLogin';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-ministry-login',
  templateUrl: './ministry-login.component.html',
  styleUrls: ['./ministry-login.component.css'],
})
export class MinistryLoginComponent implements OnInit {
  ministryLoginModel = new MinistryLogin();
  responseMessage: string = '';

  constructor(
    private _authenticationService: AuthenticationService,
    private _router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('Inside inst login');
    this._authenticationService
      .loginMinistry(this.ministryLoginModel)
      .subscribe(
        (response: any) => {
          console.log('data from server :: minst login', response.token);
          localStorage.setItem('authToken', response.token);
          this._router.navigate(['/ministryDashboard']);
        },
        (error) => {
          this.responseMessage = error.message;
        }
      );
  }
}
