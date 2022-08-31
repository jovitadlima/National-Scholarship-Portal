import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
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

  getUserName() {
    let token = localStorage.getItem('authToken');
    let claims = JSON.parse(atob(token!.split('.')[1]));
    let name =
      claims['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
    console.log('Name is ', name);
    return name;
  }

  // private handleError(error: HttpErrorResponse) {
  //   if (error.status === 0) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.error('An error occurred:', error.error);
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong.
  //     console.error(
  //       `Backend returned code ${error.status}, body was: `,
  //       error.error
  //     );
  //     return throwError(() => new Error(error.error));
  //   }
  //   // Return an observable with a user-facing error message.
  //   return throwError(
  //     () => new Error('Something bad happened; please try again later.')
  //   );
  // }
}
