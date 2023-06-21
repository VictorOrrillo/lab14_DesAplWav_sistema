import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cine } from '../models/cine';

@Injectable({
  providedIn: 'root'
})
export class CineService {
  url = 'http://localhost:3000/api/cines/'

  constructor(private http: HttpClient) { 

  }

  getCines(): Observable<any> {
    return this.http.get(this.url);
  }

  deleteCine(id: string): Observable<any>{
    return this.http.delete(this.url + id);
  }
  
  guardarCine(nombre: Cine): Observable<any> {
    return this.http.post(this.url, nombre);
  }

  viewCine(id?: string): Observable<any> {
    return this.http.get(this.url + id)
  }

  actualizarCine(id: string, nombre: Cine): Observable<any> {
    return this.http.put(this.url + id, nombre);
  }
}
