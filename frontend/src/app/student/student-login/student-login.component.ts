import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentLogin } from 'src/app/models/StudentLogin';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css'],
})
export class StudentLoginComponent implements OnInit {
  studentLoginModel = new StudentLogin();
  responseMessage: string = '';

  constructor(
    private _authenticationService: AuthenticationService,
    private _router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('Inside submit login');
    this._authenticationService.loginStudent(this.studentLoginModel).subscribe(
      (response: any) => {
        console.log('data from server :: login', response.token);
        localStorage.setItem('authToken', response.token);
        this._router.navigate(['/studentDashboard']);
      },
      (error) => (this.responseMessage = error.statusText)
    );
  }
}
