import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
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
    private _router: Router
  ) {}

  studentModel = new StudentRegister();

  states: any = STATES;
  districts: any[] = [];
  selectErrorPresent = true;
  genders: string[] = ['Male', 'Female', 'Other'];
  responseMessage: string = '';

  ngOnInit(): void {}

  onSubmit(studentRegisterForm: NgForm) {
    this.studentModel.DateOfBirth = this.toStringDate(
      this.studentModel.DateOfBirth
    );

    this._authenticationService.registerStudent(this.studentModel).subscribe(
      (data) => {
        console.log('Response:::', data);
        this.responseMessage = 'Success';
        this._router.navigate(['/studentSuccess']);
      },
      (error) => (this.responseMessage = error.statusText)
    );

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
