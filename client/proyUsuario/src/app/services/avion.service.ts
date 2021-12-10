import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Avion } from '../models/avion.model';
import { environment } from 'src/environments/environment';

const baseUrl = `${environment.apiUrl}/avion`;

@Injectable({
  providedIn: 'root'
})
export class AvionService {

  constructor(private http:HttpClient) { }


  getAll(): Observable<Avion[]> {
    return this.http.get<Avion[]>(baseUrl);
  }

  get(id: any): Observable<Avion> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }


}
