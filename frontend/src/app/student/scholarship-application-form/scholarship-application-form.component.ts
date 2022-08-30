import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { IInstitute } from 'src/app/models/IInstitute';
import { IScheme } from 'src/app/models/IScheme';
import { ScholarshipApplication } from 'src/app/models/ScholarshipApplication';
import { InstituteService } from 'src/app/services/institute.service';
import { SchemeService } from 'src/app/services/scheme.service';
import { StudentService } from 'src/app/services/student.service';
import { STATES } from '../../../assets/data/STATES';

@Component({
  selector: 'app-scholarship-application-form',
  templateUrl: './scholarship-application-form.component.html',
  styleUrls: ['./scholarship-application-form.component.css'],
})
export class ScholarshipApplicationFormComponent implements OnInit {
  scholarshipModel = new ScholarshipApplication();

  responseMessage = '';

  constructor(
    private _studentService: StudentService,
    private _schemeService: SchemeService,
    private _instituteService: InstituteService
  ) {}

  states: any = STATES;
  districts: any[] = [];
  religions: string[] = ['1', '2', '3', '4', '5'];
  schemes: IScheme[] = [];
  institutes: IInstitute[] = [];

  ngOnInit(): void {
    this._schemeService.getSchemes().subscribe((response: IScheme[]) => {
      this.schemes = response;
      console.log('Schemes', response);
    });

    this._instituteService
      .getAllInstitutes()
      .subscribe((response: IInstitute[]) => {
        this.institutes = response;
        console.log(this.institutes);
        for (let x of this.institutes) {
          console.log(x.instituteName);
        }
      });
  }

  changeDistrict(stateEvent: any) {
    let selectedState = stateEvent.target.value;
    this.districts = this.states.find(
      (st: any) => st.state == selectedState
    ).districts;
  }

  onSubmit() {
    this.scholarshipModel.ClassStartDate = this.toStringDate(
      this.scholarshipModel.ClassStartDate
    );

    this._studentService
      .createScholarshipApplicationForm(this.scholarshipModel)
      .subscribe(
        (response: any) => {
          console.log('scholarship:::', response.result);
        },
        (error) => (this.responseMessage = error.statusText)
      );

    console.log(JSON.stringify(this.scholarshipModel));
  }

  toStringDate(date: any) {
    return `${date.day}/${date.month}/${date.year}`;
  }
}
