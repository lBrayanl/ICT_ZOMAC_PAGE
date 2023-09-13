import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'servicios-root',
  templateUrl: './servicios.component.html',
  styleUrls:['./servicios.component.css']
})
export class ServicioComponent {
  title = 'SERVICIOS';
  textoInicial = 'Disenamos y desarrollamos soluciones informaticas multiplataforma de alta calidad para emprendimientos, pequenas, medianas y grandes empresas.';

  constructor(private router: Router){}

  pagina(pagina:string){
    this.router.navigate([pagina]);
  }
}
