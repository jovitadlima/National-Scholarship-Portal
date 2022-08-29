import { Component, OnInit } from '@angular/core';
import { STATES } from '../../../assets/data/STATES';
import { InstituteRegister } from 'src/app/models/InstituteRegister';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-institute-register',
  templateUrl: './institute-register.component.html',
  styleUrls: ['./institute-register.component.css'],
})
export class InstituteRegisterComponent implements OnInit {
  constructor(private _authenticationService: AuthenticationService) {}

  states: any = STATES;
  districts: any[] = [];
  instituteModel = new InstituteRegister();
  institutecategories: string[] = ['Government Institute', 'Private Institute'];
  locations: string[] = ['Rural', 'Urban'];
  instituteTypes: string[] = ['Affiliated', 'Autonomous'];
  years: string[] = ['2018', '2019', '2020', '2021', '2022'];
  errorMessage: string = '';

  ngOnInit(): void {}

  onSubmit() {
    console.log(JSON.stringify(this.instituteModel));

    // Ritam will implement this, registration with auth
    this._authenticationService
      .registerInstitute(this.instituteModel)
      .subscribe(
        (response) => {
          console.log('Response:::', response);
          this.errorMessage = 'Success';
          // this._router.navigate(['/studentSuccess']);
        },
        (error) => {
          this.errorMessage = error.message;
        }
      );
  }

  changeDistrict(selectedState: any) {
    this.districts = this.states.find(
      (st: any) => st.state == selectedState
    ).districts;
  }
}
