import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StudentRegister } from 'src/app/models/StudentRegister';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { STATES } from '../../../assets/data/STATES';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css'],
})
export class StudentRegisterComponent implements OnInit {
  constructor(
    private _authenticationService: AuthenticationService,
    private _router: Router,
    private toastr: ToastrService
  ) {}

  studentModel = new StudentRegister();

  states: any = STATES;
  districts: any[] = [];
  selectErrorPresent = true;
  genders: string[] = ['Male', 'Female', 'Other'];

  ngOnInit(): void {}

  onSubmit(studentRegisterForm: NgForm) {
    this.studentModel.DateOfBirth = this.toStringDate(
      this.studentModel.DateOfBirth
    );

    this._authenticationService
      .registerStudent(this.studentModel)
      .subscribe((response) => {
        console.log('Response:::', response);
        this.toastr.success('Registration Successfull');
        this._router.navigate(['/studentSuccess']);
      });

    console.log(JSON.stringify(this.studentModel));

    studentRegisterForm.form.reset();
  }

  changeDistrict(selectedState: any) {
    // let selectedState = stateEvent.target.value;
    this.districts = this.states.find(
      (st: any) => st.state == selectedState
    ).districts;
  }

  toStringDate(date: any) {
    return `${date.day}/${date.month}/${date.year}`;
  }
}
