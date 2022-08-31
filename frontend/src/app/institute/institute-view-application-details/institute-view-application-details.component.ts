import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IApprovedStudentApplication } from 'src/app/models/IApprovedStudentApplication';
import { InstituteService } from 'src/app/services/institute.service';

@Component({
  selector: 'app-institute-view-application-details',
  templateUrl: './institute-view-application-details.component.html',
  styleUrls: ['./institute-view-application-details.component.css'],
})
export class InstituteViewApplicationDetailsComponent implements OnInit {
  constructor(
    private _instituteService: InstituteService,
    private _route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  application!: IApprovedStudentApplication;
  approved: boolean = false;

  ngOnInit(): void {
    let id = Number(this._route.snapshot.paramMap.get('id'));
    this._instituteService
      .getPendingApplicationsById(id)
      .subscribe((response) => {
        this.application = response;
        this.approved = response.approvedByInstitute;
        console.log(response);
      });
  }

  approveApplication() {
    let id = Number(this._route.snapshot.paramMap.get('id'));
    this._instituteService
      .approveStudentApplication(id)
      .subscribe((response) => {
        console.log('approval response ::: ', response);
        this.toastr.success('Application approved');
      });
  }

  rejectApplication() {
    let id = Number(this._route.snapshot.paramMap.get('id'));
    this._instituteService
      .rejectStudentApplication(id)
      .subscribe((response) => {
        console.log('rejection response ::: ', response);
        this.toastr.success('Application rejected');
      });
  }
}
