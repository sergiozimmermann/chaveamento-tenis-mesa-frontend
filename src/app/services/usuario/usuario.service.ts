import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

const baseUrl = `${environment.apiUrl}/Usuario`;

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  constructor(private httpClient: HttpClient
    , private router: Router) { }

  public logar(usuario: IUsuario): Observable<any> {
    return this.httpClient.post(`${baseUrl}/login`, usuario);
  }

  public deslogar() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
    setTimeout(() => {
      window.location.reload();
    }, 0);
  }

  get obterTokenUsuario(): string {
    const token = localStorage.getItem('token');
    return token
      ? JSON.parse(atob(token))
      : null;
  }

  get logado(): boolean {
    return localStorage.getItem('token') ? true : false;
  }

  public testeee() {
    const inscritos = [
      "Daniel Pena",
      "Alfredo Azevedo",
      "Daniel Carvalho",
      "Pedro Vieira",
      "Marcelo Silva",
      "Caio Grott",
      "Bernardo Malikoski",
      "Bernardo Moraes",
      "Gabriel Ziliotto",
      "Georgios Godoy",
      "Rafael Oliveira",
      "Theo Bertemes",
      "Pedro Koche",
      "Messias Gabriel",
      "Kevin Lima",
      "Lucas Santos",
      "Brian Dalabeneta",
      "Bozan",
      "Luís Paula",
      "Erli Jacob"
    ];
    return this.httpClient.post('https://chaveamento-tenis-mesa-backend-9830e1c94f4e.herokuapp.com/api/Chave/montaChaves', inscritos);
  }
}

export interface IUsuario {
  id: string;
  dsEmail: string;
  dsSenha: string;
}