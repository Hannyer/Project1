import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Usuario } from '../models/usuario.model';
import { environment } from 'src/environments/environment';


const baseUrl = `${environment.apiUrl}/usuario`;;
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }


  getAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(baseUrl);
  }

  get(id: any): Observable<Usuario> {
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

  singin(data: any): Observable<any> {
    return this.http.post(baseUrl  + '/signin/', data);
  }


}








