import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IStudentApplication } from '../models/IStudentApplication';
import { IStudentDetails } from '../models/IStudentDetails';
import { ScholarshipApplication } from '../models/ScholarshipApplication';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private serverUrl = 'http://localhost:5000/api/Student';

  constructor(private _http: HttpClient, private _router: Router) {}

  getStudentDetails(): Observable<IStudentDetails> {
    return this._http.get<IStudentDetails>(`${this.serverUrl}`);
  }

  createScholarshipApplicationForm(
    applicationData: ScholarshipApplication
  ): Observable<any> {
    return this._http.post<ScholarshipApplication>(
      `${this.serverUrl}/CreateApplication`,
      applicationData
    );
  }

  getPendingApplications(): Observable<IStudentApplication[]> {
    return this._http.get<IStudentApplication[]>(
      `${this.serverUrl}/PendingApplications`
    );
  }

  getPendingApplicationsById(id: number): Observable<any> {
    return this._http.get<any>(
      `${this.serverUrl}/CheckApplicationStatus/${id}`
    );
  }
}
