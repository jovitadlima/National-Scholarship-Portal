import { Component, OnInit } from '@angular/core';
import { IInstitute } from 'src/app/models/IInstitute';
import { OfficerService } from 'src/app/services/officer.service';

@Component({
  selector: 'app-officer-institute-registration-request-list',
  templateUrl: './officer-institute-registration-request-list.component.html',
  styleUrls: ['./officer-institute-registration-request-list.component.css'],
})
export class OfficerInstituteRegistrationRequestListComponent
  implements OnInit
{
  institutes: IInstitute[] = [];

  constructor(private _officerService: OfficerService) {}

  ngOnInit(): void {
    this._officerService.getPendingInstitutes().subscribe((response) => {
      this.institutes = response;
      console.log(response);
    });
  }
}
