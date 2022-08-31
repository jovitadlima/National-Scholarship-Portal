import { Component, OnInit } from '@angular/core';
import { IStudentDetails } from 'src/app/models/IStudentDetails';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css'],
})
export class StudentProfileComponent implements OnInit {
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
