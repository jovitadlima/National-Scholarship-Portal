import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { STATES } from '../../../assets/data/STATES';

@Component({
  selector: 'app-scholarship-application-form',
  templateUrl: './scholarship-application-form.component.html',
  styleUrls: ['./scholarship-application-form.component.css'],
})
export class ScholarshipApplicationFormComponent implements OnInit {
  model!: NgbDateStruct;
  constructor() {}

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
