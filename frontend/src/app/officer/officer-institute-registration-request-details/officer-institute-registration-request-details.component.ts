import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IInstitute } from 'src/app/models/IInstitute';
import { OfficerService } from 'src/app/services/officer.service';

@Component({
  selector: 'app-officer-institute-registration-request-details',
  templateUrl:
    './officer-institute-registration-request-details.component.html',
  styleUrls: ['./officer-institute-registration-request-details.component.css'],
})
export class OfficerInstituteRegistrationRequestDetailsComponent
  implements OnInit
{
  institute!: IInstitute;

  constructor(
    private _officerService: OfficerService,
    private _route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    let id = Number(this._route.snapshot.paramMap.get('id'));
    this._officerService.getPendingInstitutesById(id).subscribe((response) => {
      this.institute = response;
      console.log(response);
    });
  }

  verify() {
    let id = Number(this._route.snapshot.paramMap.get('id'));
    this._officerService
      .verifyInstituteRegistration(id)
      .subscribe((response) => {
        console.log(response);
        this.toastr.success('Institute verified');
      });
  }

  reject() {
    let id = Number(this._route.snapshot.paramMap.get('id'));
    this._officerService
      .rejectInstituteRegistration(id)
      .subscribe((response) => {
        console.log(response);
        this.toastr.success('Institute rejected');
      });
  }

  back() {
    console.log('back');
  }
}
