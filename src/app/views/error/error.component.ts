import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'error-root',
  templateUrl: './error.component.html',
  styleUrls:['./error.component.css']
})
export class ErrorComponent {
  title = '404';

  constructor(private router: Router){}

  pagina(pagina:string){
    this.router.navigate([pagina]);
  }
}
