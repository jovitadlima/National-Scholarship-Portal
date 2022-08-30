import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IInstitute } from 'src/app/models/IInstitute';
import { MinistryService } from 'src/app/services/ministry.service';

@Component({
  selector: 'app-ministry-institute-registration-request-details',
  templateUrl:
    './ministry-institute-registration-request-details.component.html',
  styleUrls: [
    './ministry-institute-registration-request-details.component.css',
  ],
})
export class MinistryInstituteRegistrationRequestDetailsComponent
  implements OnInit
{
  institute!: IInstitute;

  constructor(
    private _ministryService: MinistryService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id = Number(this._route.snapshot.paramMap.get('id'));
    this._ministryService.getPendingInstitutesById(id).subscribe((response) => {
      this.institute = response;
      console.log(response);
    });
  }

  verify() {
    let id = Number(this._route.snapshot.paramMap.get('id'));
    this._ministryService
      .verifyInstituteRegistration(id)
      .subscribe((response) => {
        console.log(response);
      });
  }

  reject() {
    let id = Number(this._route.snapshot.paramMap.get('id'));
    this._ministryService
      .rejectInstituteRegistration(id)
      .subscribe((response) => {
        console.log(response);
      });
  }

  back() {
    console.log('back');
  }
}
