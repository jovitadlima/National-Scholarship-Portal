import { Component, OnInit } from '@angular/core';
import { STATES } from '../../../assets/data/STATES';
import { InstituteRegister } from 'src/app/models/InstituteRegister';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-institute-register',
  templateUrl: './institute-register.component.html',
  styleUrls: ['./institute-register.component.css'],
})
export class InstituteRegisterComponent implements OnInit {
  constructor(
    private _authenticationService: AuthenticationService,
    private _router: Router,
    private toastr: ToastrService
  ) {}

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

    // Ritam will implement this, registration with auth
    this._authenticationService
      .registerInstitute(this.instituteModel)
      .subscribe((response) => {
        console.log('Response:::', response);
        this.toastr.success('Registration Successful');
        this._router.navigate(['/instituteLogin']);
      });
  }

  changeDistrict(selectedState: any) {
    this.districts = this.states.find(
      (st: any) => st.state == selectedState
    ).districts;
  }
}
