import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IStudentDetails } from 'src/app/models/IStudentDetails';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css'],
})
export class StudentDashboardComponent implements OnInit {
  student!: IStudentDetails;

  constructor(private _studentService: StudentService) {}

  ngOnInit(): void {
    this._studentService
      .getStudentDetails()
      .subscribe((response: IStudentDetails) => {
        this.student = response;
        console.log(response);
      });
  }
}
