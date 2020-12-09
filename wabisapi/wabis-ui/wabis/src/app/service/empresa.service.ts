import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from '../model/Empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private http:HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token')!)
  }

  getAllEmpresa(): Observable<Empresa[]>{
    return this.http.get<Empresa[]>('http://localhost:8080/empresa', this.token)
  }
  
  getByIdEmpresa(id: number): Observable<Empresa>{
    return this.http.get<Empresa>(`http://localhost:8080/empresa/${id}`, this.token)
  }

  postEmpresa(empresa: Empresa): Observable<Empresa>{
    return this.http.post<Empresa>('http://localhost:8080/empresa', empresa, this.token)
  }

}