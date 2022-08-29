import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { StudentRegister } from 'src/app/models/StudentRegister';
import { STATES } from '../../../assets/data/STATES';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css'],
})
export class StudentRegisterComponent implements OnInit {
  constructor() {}

  model!: NgbDateStruct;

  studentModel = new StudentRegister();

  states: any = STATES;
  districts: any[] = [];
  selectErrorPresent = true;
  genders: string[] = ['Male', 'Female', 'Other'];

  ngOnInit(): void {}

  onSubmit() {
    this.studentModel.DateOfBirth = this.toStringDate(
      this.studentModel.DateOfBirth
    );

    console.log(JSON.stringify(this.studentModel));
    alert(this.studentModel);
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
