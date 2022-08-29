import { Component, OnInit } from '@angular/core';
import { IStudentApplication } from 'src/app/models/IStudentApplication';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-applications',
  templateUrl: './student-applications.component.html',
  styleUrls: ['./student-applications.component.css'],
})
export class StudentApplicationsComponent implements OnInit {
  constructor(private _studentService: StudentService) {}

  applications: IStudentApplication[] = [];
  errorMessage: string = '';

  ngOnInit(): void {
    this._studentService.getPendingApplications().subscribe(
      (response: IStudentApplication[]) => {
        this.applications = response;
        console.log(response);
      },
      (error) => {
        this.errorMessage = error.message;
      }
    );
  }
}
