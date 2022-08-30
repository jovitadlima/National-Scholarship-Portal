import { Component, OnInit } from '@angular/core';
import { IInstitute } from 'src/app/models/IInstitute';
import { MinistryService } from 'src/app/services/ministry.service';

@Component({
  selector: 'app-ministry-institute-registration-request-list',
  templateUrl: './ministry-institute-registration-request-list.component.html',
  styleUrls: ['./ministry-institute-registration-request-list.component.css'],
})
export class MinistryInstituteRegistrationRequestListComponent
  implements OnInit
{
  institutes: IInstitute[] = [];

  constructor(private _ministryService: MinistryService) {}

  ngOnInit(): void {
    this._ministryService.getPendingInstitutes().subscribe((response) => {
      this.institutes = response;
      console.log(response);
    });
  }
}
