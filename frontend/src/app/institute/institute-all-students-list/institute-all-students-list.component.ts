import { Component, OnInit } from '@angular/core';
import { IStudent } from 'src/app/models/IStudent';
import { StudentRegister } from 'src/app/models/StudentRegister';
import { InstituteService } from 'src/app/services/institute.service';

@Component({
  selector: 'app-institute-all-students-list',
  templateUrl: './institute-all-students-list.component.html',
  styleUrls: ['./institute-all-students-list.component.css'],
})
export class InstituteAllStudentsListComponent implements OnInit {
  constructor(private _instituteService: InstituteService) {}

  students: IStudent[] = [];
  errorMessage = '';

  ngOnInit(): void {
    this._instituteService.getAllStudentsByInstitute().subscribe(
      (response: IStudent[]) => {
        this.students = response;
        console.log(response);
      },
      (error) => {
        this.errorMessage = error.message;
      }
    );
  }
}
