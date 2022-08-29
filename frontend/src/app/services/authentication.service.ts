import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private serverUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient, private router: Router) {}

  registerStudent(studentData: any) {
    return this.http.post<any>(
      `${this.serverUrl}/Student/Register`,
      studentData
    );
  }

  loginStudent(studentData: any) {
    return this.http.post<any>(`${this.serverUrl}/Student/Login`, studentData);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/events']);
  }
}
