import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IInstitute } from '../models/IInstitute';

@Injectable({
  providedIn: 'root',
})
export class InstituteService {
  private serverUrl = 'http://localhost:5000/api/Institute';

  constructor(private _http: HttpClient, private _router: Router) {}

  getAllInstitutes(): Observable<IInstitute[]> {
    return this._http.get<IInstitute[]>(`${this.serverUrl}/AllInstitutes`);
  }
}
