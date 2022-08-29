import { Component, OnInit } from '@angular/core';
import { STATES } from '../../../assets/data/STATES';
import { InstituteRegister } from 'src/app/models/InstituteRegister';

@Component({
  selector: 'app-institute-register',
  templateUrl: './institute-register.component.html',
  styleUrls: ['./institute-register.component.css'],
})
export class InstituteRegisterComponent implements OnInit {
  constructor() {}

  states: any = STATES;
  districts: any[] = [];
  instituteModel = new InstituteRegister();
  institutecategories: string[] = ['Government Institute', 'Private Institute'];
  locations: string[] = ['Rural', 'Urban'];
  instituteTypes: string[] = ['Affiliated', 'Autonomous'];
  years: string[] = ['2018', '2019', '2020', '2021', '2022'];

  ngOnInit(): void {}

  onSubmit() {
    console.log(JSON.stringify(this.instituteModel));
    alert(this.instituteModel);

    // Ritam will implement this, registration with auth
    // this._instituteService.register(this.instituteModel).subscribe(
    //   (data) => console.log('Successful!', data),
    //   (error) => console.log('Error', error)
    // );
  }

  changeDistrict(selectedState: any) {
    this.districts = this.states.find(
      (st: any) => st.state == selectedState
    ).districts;
  }
}
