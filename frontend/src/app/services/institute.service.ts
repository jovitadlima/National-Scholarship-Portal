import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IInstitute } from '../models/IInstitute';
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
}
