import { Component, OnInit } from '@angular/core';
import { IApprovedStudentApplication } from 'src/app/models/IApprovedStudentApplication';
import { MinistryService } from 'src/app/services/ministry.service';

@Component({
  selector: 'app-ministry-student-application-list',
  templateUrl: './ministry-student-application-list.component.html',
  styleUrls: ['./ministry-student-application-list.component.css'],
})
export class MinistryStudentApplicationListComponent implements OnInit {
  constructor(private _ministryService: MinistryService) {}

  applications: IApprovedStudentApplication[] = [];

  ngOnInit(): void {
    this._ministryService.getPendingApplications().subscribe((response) => {
      this.applications = response;
      console.log(response);
    });
  }
}
