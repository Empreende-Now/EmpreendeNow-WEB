import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor( private http: HttpClient) {}

  cadastrarUsuario(usuario: any): Observable<any>{
    return this.http.post("http://localhost:4100/usuario", usuario, {observe:'response'})
  }

  login(usuario: any): Observable<any>{
    return this.http.post("http://localhost:4100/usuario/login", usuario, {observe:'response'})
  }
}
