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

  atualizarSenha(dados: any): Observable<any>{
    return this.http.put("http://localhost:4100/usuario/atualizarSenha/" + dados.cpf, {senha: dados.novaSenha}, {observe:'response'})
  }

}
