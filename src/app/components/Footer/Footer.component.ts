import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'Footer-root',
  templateUrl: './Footer.component.html',
  styleUrls: ['./Footer.component.css'],
})
export class FooterComponent {

  constructor(private router: Router){}

  url = "../../../assets/image/";
  instagram = this.url+"instagram.png";
  whatsapp = this.url+"whatsapp.png";
  twitter = this.url+"twitter.png";
  facebook = this.url+"facebook.png";

  pagina(pagina:string){
    this.router.navigate([pagina]);
  }
}
