import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApprovedStudentApplication } from '../models/IApprovedStudentApplication';
import { IInstitute } from '../models/IInstitute';

@Injectable({
  providedIn: 'root',
})
export class OfficerService {
  private serverUrl = 'http://localhost:5000/api/Officer';

  constructor(private _http: HttpClient) {}

  getPendingInstitutes(): Observable<IInstitute[]> {
    return this._http.get<IInstitute[]>(`${this.serverUrl}/PendingInstitutes`);
  }

  getPendingInstitutesById(id: number): Observable<IInstitute> {
    return this._http.get<IInstitute>(
      `${this.serverUrl}/PendingInstitutes/${id}`
    );
  }

  verifyInstituteRegistration(id: number): Observable<any> {
    return this._http.get<any>(`${this.serverUrl}/VerifyInstitute/${id}`);
  }

  rejectInstituteRegistration(id: number): Observable<any> {
    return this._http.get<any>(`${this.serverUrl}/RejectInstitute/${id}`);
  }

  // applications
  getPendingApplications(): Observable<IApprovedStudentApplication[]> {
    return this._http.get<IApprovedStudentApplication[]>(
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

  verifyApplication(id: number): Observable<any> {
    return this._http.get<any>(`${this.serverUrl}/VerifyApplication/${id}`);
  }

  rejectApplication(id: number): Observable<any> {
    return this._http.get<any>(`${this.serverUrl}/RejectApplication/${id}`);
  }
}
