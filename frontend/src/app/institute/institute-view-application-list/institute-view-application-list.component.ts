import { Component, OnInit } from '@angular/core';
import { IStudentApplication } from 'src/app/models/IStudentApplication';
import { InstituteService } from 'src/app/services/institute.service';

@Component({
  selector: 'app-institute-view-application-list',
  templateUrl: './institute-view-application-list.component.html',
  styleUrls: ['./institute-view-application-list.component.css'],
})
export class InstituteViewApplicationListComponent implements OnInit {
  constructor(private _instituteService: InstituteService) {}

  applications: IStudentApplication[] = [];

  ngOnInit(): void {
    this._instituteService
      .getPendingApplications()
      .subscribe((response: IStudentApplication[]) => {
        this.applications = response;
        console.log(response);
      });
  }
}
