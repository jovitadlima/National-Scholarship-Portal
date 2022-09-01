import { Component, OnInit } from '@angular/core';
import { IApprovedStudentApplication } from 'src/app/models/IApprovedStudentApplication';
import { InstituteService } from 'src/app/services/institute.service';

@Component({
  selector: 'app-institute-approved-applications-list',
  templateUrl: './institute-approved-applications-list.component.html',
  styleUrls: ['./institute-approved-applications-list.component.css'],
})
export class InstituteApprovedApplicationsListComponent implements OnInit {
  constructor(private _instituteService: InstituteService) {}

  applications: IApprovedStudentApplication[] = [];

  ngOnInit(): void {
    this._instituteService
      .getApprovedApplications()
      .subscribe((response: IApprovedStudentApplication[]) => {
        this.applications = response;
        console.log(this.applications);
      });
  }
}
