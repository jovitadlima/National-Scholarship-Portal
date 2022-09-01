import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IApprovedStudentApplication } from 'src/app/models/IApprovedStudentApplication';
import { IStudentApplication } from 'src/app/models/IStudentApplication';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-applications-detail',
  templateUrl: './student-applications-detail.component.html',
  styleUrls: ['./student-applications-detail.component.css'],
})
export class StudentApplicationsDetailComponent implements OnInit {
  constructor(
    private _studentService: StudentService,
    private _route: ActivatedRoute
  ) {}

  application!: IApprovedStudentApplication;
  status: boolean = false;
  rejected: boolean = false;

  ngOnInit(): void {
    let id = Number(this._route.snapshot.paramMap.get('id'));
    this._studentService
      .getPendingApplicationsById(id)
      .subscribe((response) => {
        this.application = response.application;
        this.status = response.status;
        this.rejected = response.application.isRejected;
        console.log(response);
      });
  }
}
