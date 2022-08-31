import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { InstituteLogin } from 'src/app/models/InstuteLogin';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-institute-login',
  templateUrl: './institute-login.component.html',
  styleUrls: ['./institute-login.component.css'],
})
export class InstituteLoginComponent implements OnInit {
  instituteLoginModel = new InstituteLogin();

  constructor(
    private _authenticationService: AuthenticationService,
    private _router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('Inside inst login');
    this._authenticationService
      .loginInstitute(this.instituteLoginModel)
      .subscribe((response: any) => {
        console.log('data from server :: inst login', response.token);
        localStorage.setItem('authToken', response.token);
        this.toastr.success('Login Successful');
        this._router.navigate(['/instituteDashboard']);
      });
  }
}
