import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  cadastrar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('https://personalblogbe.herokuapp.com/usuarios/cadastrar', usuario)
  }

  getByIdUsuario(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`https://personalblogbe.herokuapp.com/usuarios/${id}`, this.token)
  }

  login(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{
    return this.http.post<UsuarioLogin>('https://personalblogbe.herokuapp.com/usuarios/logar', usuarioLogin)
  }

  // login(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin> {
  //   return this.http.post<UsuarioLogin>('http://localhost:8080/usuarios/logar', usuarioLogin)
  // }

  // cadastrar(usuario: Usuario): Observable<Usuario> {
  //   return this.http.post<Usuario>('http://localhost:8080/usuarios/cadastrar', usuario)
  // }

  // getByIdUsuario(id: number): Observable<Usuario> {
  //   return this.http.get<Usuario>(`http://localhost:8080/usuarios/${id}`)
  //}

  logado() {
    let ok = false

    if (environment.token != '') {
      ok = true
    }
    return ok
  }
}
