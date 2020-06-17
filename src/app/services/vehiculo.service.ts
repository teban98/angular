import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehiculo } from '../model/vehiculo';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Endpoints } from '../util/endpoints';
import { Header } from '../util/header';



@Injectable({
  providedIn: 'root'
})
export class VehiculoService {



  constructor(private http: HttpClient) { }

  listar(): Observable<Vehiculo[]> {
    return this.http.get<Vehiculo[]> (Endpoints.LISTAR);
  }

  insert(vehiculo: Vehiculo): Observable<Vehiculo> {


    return this.http.post<Vehiculo>(Endpoints.INSERTAR, vehiculo, { headers: Header.HEADER_JSON});

  }
  update(id: string) {
    return this.http.put<Vehiculo>(Endpoints.EDITAR.concat(id.toString()).concat('/vehiculo'), {headers: Header.HEADER_TEXT});
 }
 eliminar(id: string) {
  return this.http.delete<Vehiculo>(Endpoints.ELIMINAR.concat(id.toString()).concat('/vehiculo'), {headers: Header.HEADER_TEXT});
}

}
