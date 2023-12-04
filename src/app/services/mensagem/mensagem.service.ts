import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  constructor(private messageService: MessageService) { }

  public showMessage(mensagem: string, severity: string) {
    this.messageService.clear();

    let summary: string;

    switch (severity) {
      case 'success':
        summary = 'Sucesso!'
        break;

      case 'info':
        summary = 'Info!'
        break;

      case 'warn':
        summary = 'Aviso!'
        break;

      case 'error':
        summary = 'Erro!'
        break;
      default:
        summary = 'Sucesso!'
        break;
    }

    this.messageService.add({ severity: severity, summary: summary, detail: mensagem });
  }

  public formularioInvalido(formulario: FormGroup, friendlyNames: Map<string, string>) {
    this.messageService.clear();

    let invalidFields: string[] = [];
    Object.keys(formulario.controls).forEach(field => {
      invalidFields.push(friendlyNames.get(field)!);
    });

    if (invalidFields.length == 0) return;

    const mensagem: string = 'Os seguintes campos estão inválidos:\n' + invalidFields.join(',\n');
    this.messageService.add({ severity: 'error', summary: 'Erro!', detail: mensagem });
  }

}
