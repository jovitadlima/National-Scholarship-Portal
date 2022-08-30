import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApprovedStudentApplication } from '../models/IApprovedStudentApplication';
import { IInstitute } from '../models/IInstitute';
import { IStudent } from '../models/IStudent';
import { IStudentApplication } from '../models/IStudentApplication';

@Injectable({
  providedIn: 'root',
})
export class InstituteService {
  private serverUrl = 'http://localhost:5000/api/Institute';

  constructor(private _http: HttpClient) {}

  getAllInstitutes(): Observable<IInstitute[]> {
    return this._http.get<IInstitute[]>(`${this.serverUrl}/AllInstitutes`);
  }

  getInstituteDetail(): Observable<IInstitute> {
    return this._http.get<IInstitute>(`${this.serverUrl}`);
  }

  getPendingApplications(): Observable<IStudentApplication[]> {
    return this._http.get<IStudentApplication[]>(
      `${this.serverUrl}/PendingApplications`
    );
  }

  getPendingApplicationsById(
    id: number
  ): Observable<IApprovedStudentApplication> {
    return this._http.get<IApprovedStudentApplication>(
      `${this.serverUrl}/PendingApplications/${id}`
    );
  }

  getAllStudentsByInstitute(): Observable<IStudent[]> {
    return this._http.get<IStudent[]>(`${this.serverUrl}/AllStudents`);
  }

  getApprovedApplications(): Observable<IApprovedStudentApplication[]> {
    return this._http.get<IApprovedStudentApplication[]>(
      `${this.serverUrl}/ApprovedApplications`
    );
  }

  approveStudentApplication(id: number): Observable<any> {
    return this._http.get<any>(
      `${this.serverUrl}/VerifyPendingApplication/${id}`
    );
  }

  rejectStudentApplication(id: number): Observable<any> {
    return this._http.get<any>(
      `${this.serverUrl}/RejectPendingApplication/${id}`
    );
  }
}
