import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarifa } from '../models/tarifa';

@Injectable({
  providedIn: 'root'
})
export class TarifaService {
  url = 'http://localhost:3000/api/tarifas/'

  constructor(private http: HttpClient) { 

  }

  getTarifas(): Observable<any> {
    return this.http.get(this.url);
  }

  deleteTarifa(id: string): Observable<any>{
    return this.http.delete(this.url + id);
  }
  
  guardarTarifa(dia: Tarifa): Observable<any> {
    return this.http.post(this.url, dia);
  }

  viewTarifa(id?: string): Observable<any> {
    return this.http.get(this.url + id)
  }

  actualizarTarifa(id: string, dia: Tarifa): Observable<any> {
    return this.http.put(this.url + id, dia);
  }
}
