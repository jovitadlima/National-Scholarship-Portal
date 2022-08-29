import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InstituteLogin } from 'src/app/models/InstuteLogin';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-institute-login',
  templateUrl: './institute-login.component.html',
  styleUrls: ['./institute-login.component.css'],
})
export class InstituteLoginComponent implements OnInit {
  instituteLoginModel = new InstituteLogin();
  responseMessage: string = '';

  constructor(
    private _authenticationService: AuthenticationService,
    private _router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('Inside inst login');
    this._authenticationService
      .loginInstitute(this.instituteLoginModel)
      .subscribe(
        (response: any) => {
          console.log('data from server :: inst login', response.token);
          localStorage.setItem('authToken', response.token);
          this._router.navigate(['/instituteDashboard']);
        },
        (error) => (this.responseMessage = error.statusText)
      );
  }
}
