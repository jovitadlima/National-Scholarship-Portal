import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IApprovedStudentApplication } from 'src/app/models/IApprovedStudentApplication';
import { OfficerService } from 'src/app/services/officer.service';

@Component({
  selector: 'app-view-scholarship-application-details',
  templateUrl: './view-scholarship-application-details.component.html',
  styleUrls: ['./view-scholarship-application-details.component.css'],
})
export class ViewScholarshipApplicationDetailsComponent implements OnInit {
  application!: IApprovedStudentApplication;

  constructor(
    private _officerService: OfficerService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id = Number(this._route.snapshot.paramMap.get('id'));
    this._officerService
      .getPendingApplicationsById(id)
      .subscribe((response) => {
        this.application = response;
        console.log(response);
      });
  }

  verify() {
    let id = Number(this._route.snapshot.paramMap.get('id'));
    this._officerService.verifyApplication(id).subscribe((response) => {
      console.log(response);
    });
  }

  reject() {
    let id = Number(this._route.snapshot.paramMap.get('id'));
    this._officerService.rejectApplication(id).subscribe((response) => {
      console.log(response);
    });
  }

  back() {}
}
