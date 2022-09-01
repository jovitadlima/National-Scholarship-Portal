import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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

  constructor(
    private _studentService: StudentService,
    private _schemeService: SchemeService,
    private _instituteService: InstituteService,
    private _router: Router,
    private toastr: ToastrService
  ) {}

  states: any = STATES;
  districts: any[] = [];
  religions: string[] = ['Hindu', 'Muslim', 'Christian', 'Other'];
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
      .subscribe((response: any) => {
        console.log('scholarship:::', response.result);
        this.toastr.success('Apllication form submitted');
        this._router.navigate(['/studentApplications']);
      });

    console.log(JSON.stringify(this.scholarshipModel));
  }

  toStringDate(date: any) {
    return `${date.day}/${date.month}/${date.year}`;
  }

  setDomicileCertificate(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      this.scholarshipModel.DomicileCertificate = target.files[0].name;
      console.log(this.scholarshipModel.DomicileCertificate);
    }
  }

  setPhoto(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      this.scholarshipModel.Photo = target.files[0].name;
      console.log(this.scholarshipModel.Photo);
    }
  }

  setInstituteIdCard(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      this.scholarshipModel.InstituteIdCard = target.files[0].name;
      console.log(this.scholarshipModel.InstituteIdCard);
    }
  }

  setCasteOrIncomeCertificate(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      this.scholarshipModel.CasteOrIncomeCertificate = target.files[0].name;
      console.log(this.scholarshipModel.CasteOrIncomeCertificate);
    }
  }

  setPreviousYearMarksheet(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      this.scholarshipModel.PreviousYearMarksheet = target.files[0].name;
      console.log(this.scholarshipModel.PreviousYearMarksheet);
    }
  }

  setFeeReceiptOfCurrentYear(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      this.scholarshipModel.FeeReceiptOfCurrentYear = target.files[0].name;
      console.log(this.scholarshipModel.FeeReceiptOfCurrentYear);
    }
  }

  setBankPassBook(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      this.scholarshipModel.BankPassBook = target.files[0].name;
      console.log(this.scholarshipModel.BankPassBook);
    }
  }

  setAadharCard(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      this.scholarshipModel.AadharCard = target.files[0].name;
      console.log(this.scholarshipModel.AadharCard);
    }
  }

  setMarkSheet10(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      this.scholarshipModel.MarkSheet10 = target.files[0].name;
      console.log(this.scholarshipModel.MarkSheet10);
    }
  }

  setMarkSheet12(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      this.scholarshipModel.MarkSheet12 = target.files[0].name;
      console.log(this.scholarshipModel.MarkSheet12);
    }
  }
}
