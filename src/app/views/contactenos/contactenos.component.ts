import { Component } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'contactenos-root',
  templateUrl: './contactenos.component.html',
  styleUrls:['./contactenos.component.css']
})

export class ContactenosComponent {
  nombrevista = 'CONTACTENOS';
  textoInicio = 'Las personas que toman la iniciativa y se esfuerzan pueden tener exito o pueden fracasar, pero aquellas que no toman la iniciativa casi siempre fracasan.';

  constructor(public _MessageService: MessageService){}
  contactForm(form:any){
    this._MessageService.sendMessage(form).subscribe(() => {
      alert('Mensaje Enviado');
    })
  }
}
