import { Component, OnInit } from '@angular/core';
import { STATES } from '../../../assets/data/STATES';

@Component({
  selector: 'app-institute-register',
  templateUrl: './institute-register.component.html',
  styleUrls: ['./institute-register.component.css'],
})
export class InstituteRegisterComponent implements OnInit {
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
