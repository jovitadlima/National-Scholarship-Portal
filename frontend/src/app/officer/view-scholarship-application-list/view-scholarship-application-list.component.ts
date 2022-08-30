import { Component, OnInit } from '@angular/core';
import { IApprovedStudentApplication } from 'src/app/models/IApprovedStudentApplication';
import { OfficerService } from 'src/app/services/officer.service';

@Component({
  selector: 'app-view-scholarship-application-list',
  templateUrl: './view-scholarship-application-list.component.html',
  styleUrls: ['./view-scholarship-application-list.component.css'],
})
export class ViewScholarshipApplicationListComponent implements OnInit {
  constructor(private _officerService: OfficerService) {}

  applications: IApprovedStudentApplication[] = [];

  ngOnInit(): void {
    this._officerService.getPendingApplications().subscribe((response) => {
      this.applications = response;
      console.log(response);
    });
  }
}
