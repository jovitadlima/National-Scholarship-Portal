import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IApprovedStudentApplication } from 'src/app/models/IApprovedStudentApplication';
import { MinistryService } from 'src/app/services/ministry.service';

@Component({
  selector: 'app-ministry-student-application-details',
  templateUrl: './ministry-student-application-details.component.html',
  styleUrls: ['./ministry-student-application-details.component.css'],
})
export class MinistryStudentApplicationDetailsComponent implements OnInit {
  application!: IApprovedStudentApplication;

  constructor(
    private _ministryService: MinistryService,
    private _route: ActivatedRoute,
    private toastr: ToastrService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    let id = Number(this._route.snapshot.paramMap.get('id'));
    this._ministryService
      .getPendingApplicationsById(id)
      .subscribe((response) => {
        this.application = response;
        console.log(response);
      });
  }

  verify() {
    let id = Number(this._route.snapshot.paramMap.get('id'));
    this._ministryService.verifyApplication(id).subscribe((response) => {
      console.log(response);
      this.toastr.success('Application approved');
    });
  }

  reject() {
    let id = Number(this._route.snapshot.paramMap.get('id'));
    this._ministryService.rejectApplication(id).subscribe((response) => {
      console.log(response);
      this.toastr.success('Application rejected');
    });
  }

  back() {
    this._router.navigate(['/ministryApplicationList']);
  }
}
