import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  application!: IStudentApplication;
  status: boolean = false;

  ngOnInit(): void {
    let id = Number(this._route.snapshot.paramMap.get('id'));
    this._studentService
      .getPendingApplicationsById(id)
      .subscribe((response) => {
        this.application = response.application;
        this.status = response.status;
        console.log(response);
      });
  }
}
