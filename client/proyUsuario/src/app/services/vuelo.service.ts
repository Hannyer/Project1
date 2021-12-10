import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {Vuelo } from '../models/vuelo.model';
import { environment } from 'src/environments/environment';


const baseUrl = `${environment.apiUrl}/vuelo`;
@Injectable({
  providedIn: 'root'
})
export class VueloService {

  constructor(private http:HttpClient) { }


  getAll(): Observable<Vuelo[]> {
    return this.http.get<Vuelo[]>(baseUrl);
  }

  get(id: any): Observable<Vuelo> {
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
