import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IScheme } from '../models/IScheme';

@Injectable({
  providedIn: 'root',
})
export class SchemeService {
  private serverUrl = 'http://localhost:5000/api/Scheme';

  constructor(private _http: HttpClient, private _router: Router) {}

  getScheme(): Observable<IScheme[]> {
    return this._http.get<IScheme[]>(`${this.serverUrl}`);
  }
}
