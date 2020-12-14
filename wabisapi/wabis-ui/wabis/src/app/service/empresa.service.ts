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
    return this.http.get<Empresa[]>('http://localhost:9000/empresa', this.token)
  }
  
  getByIdEmpresa(id: number): Observable<Empresa>{
    return this.http.get<Empresa>(`http://localhost:9000/empresa/${id}`, this.token)
  }

  postEmpresa(empresa: Empresa): Observable<Empresa>{
    return this.http.post<Empresa>('http://localhost:9000/empresa', empresa, this.token)
  }

  putEmpresa(empresa: Empresa): Observable<Empresa> {
    return this.http.put<Empresa>('http://localhost:9000/empresa', empresa, this.token)
  }

  deleteEmpresa(id: number){
    return this.http.delete(`http://localhost:9000/empresa/${id}`, this.token)
  }

  getByNomeEmpresa(nome: string): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(`http://localhost:9000/empresa/nome/${nome}`, this.token)
  }

}