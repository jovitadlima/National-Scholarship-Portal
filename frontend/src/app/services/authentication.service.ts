import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { InstituteRegister } from '../models/InstituteRegister';
import { InstituteLogin } from '../models/InstuteLogin';
import { MinistryLogin } from '../models/MinistryLogin';
import { OfficerLogin } from '../models/OfficerLogin';
import { StudentLogin } from '../models/StudentLogin';
import { StudentRegister } from '../models/StudentRegister';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private serverUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient, private router: Router) {}

  registerStudent(studentData: StudentRegister): Observable<any> {
    return this.http.post<any>(
      `${this.serverUrl}/Student/Register`,
      studentData
    );
  }

  loginStudent(studentData: StudentLogin): Observable<any> {
    return this.http.post<any>(`${this.serverUrl}/Student/Login`, studentData);
  }

  registerInstitute(instituteData: InstituteRegister): Observable<any> {
    return this.http.post<any>(
      `${this.serverUrl}/Institute/Register`,
      instituteData
    );
  }

  loginInstitute(instituteData: InstituteLogin): Observable<any> {
    return this.http.post<any>(
      `${this.serverUrl}/Institute/Login`,
      instituteData
    );
  }

  loginOfficer(officerData: OfficerLogin): Observable<any> {
    return this.http.post<any>(`${this.serverUrl}/Officer/Login`, officerData);
  }

  loginMinistry(ministryData: MinistryLogin): Observable<any> {
    return this.http.post<any>(
      `${this.serverUrl}/Ministry/Login`,
      ministryData
    );
  }

  logout() {
    localStorage.removeItem('authToken');
    this.router.navigate(['/']);
  }

  isLoggedIn() {
    return !!localStorage.getItem('authToken');
  }
}
