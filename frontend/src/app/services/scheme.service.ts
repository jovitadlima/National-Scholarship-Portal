import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IScheme } from '../models/IScheme';
import { SchemeModel } from '../models/SchemeModel';

@Injectable({
  providedIn: 'root',
})
export class SchemeService {
  private serverUrl = 'http://localhost:5000/api/Scheme';

  constructor(private _http: HttpClient, private _router: Router) {}

  getSchemes(): Observable<IScheme[]> {
    return this._http.get<IScheme[]>(`${this.serverUrl}`);
  }

  getSchemeById(id: number): Observable<any> {
    return this._http.get<any>(`${this.serverUrl}/${id}`);
  }

  addScheme(schemeData: SchemeModel): Observable<SchemeModel> {
    return this._http.post<SchemeModel>(`${this.serverUrl}`, schemeData);
  }

  editScheme(id: number, schemeData: SchemeModel): Observable<any> {
    return this._http.put<any>(`${this.serverUrl}/${id}`, schemeData);
  }

  deleteScheme(id: number): Observable<IScheme[]> {
    return this._http.delete<IScheme[]>(`${this.serverUrl}/${id}`);
  }
}
