import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { STATES } from '../../../assets/data/STATES';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css'],
})
export class StudentRegisterComponent implements OnInit {
  constructor() {}

  model!: NgbDateStruct;

  states: any = STATES;
  districts: any[] = [];

  ngOnInit(): void {}

  changeDistrict(stateEvent: any) {
    let selectedState = stateEvent.target.value;
    this.districts = this.states.find(
      (st: any) => st.state == selectedState
    ).districts;
  }
}
