import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MensagemService } from 'src/app/services/mensagem/mensagem.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formulario: FormGroup;
  public friendlyNames: Map<string, string>;

  public tentouLogar: boolean = false;
  public mostrarEsqueciSenha: boolean = false;

  constructor(private usuarioService: UsuarioService
    , private formBuilder: FormBuilder
    , private mensagemService: MensagemService
    , private router: Router) {

    this.formulario = formBuilder.group({
      dsEmail: ['', [Validators.required]],
      dsSenha: ['', [Validators.required, Validators.minLength(8)]]
    });

    this.friendlyNames = new Map<string, string>([
      ['dsEmail', 'Email']
      , ['dsSenha', 'Senha']
    ]);
  }

  ngOnInit() {
  }

  public logar() {
    this.tentouLogar = true;

    const usuario = this.formulario.getRawValue();
    if (this.formulario.invalid) {
      this.mensagemService.formularioInvalido(this.formulario, this.friendlyNames);
      return;
    }

    this.usuarioService.logar(usuario).subscribe(retorno => {
      if (retorno.statusCode !== 200) {
        this.mensagemService.showMessage('Falha na autenticação\n Usuário ou senha incorretos', 'error');
        return;
      }
      localStorage.setItem('token', btoa(JSON.stringify(retorno.dados.token)));
      this.router.navigate(['']);
    });
  }

  public deslogar() {
    this.usuarioService.deslogar();
  }

}
