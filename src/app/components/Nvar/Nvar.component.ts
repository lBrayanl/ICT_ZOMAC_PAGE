import { Component, Input, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'Nvar-root',
  templateUrl: './Nvar.component.html',
  styleUrls: ['./Nvar.component.css']
})
export class NvarComponent implements OnInit{
  clase = "header";
  url = "../../../assets/image/";
  logo = this.url+"logo.png";
  letras = "color:black !important;";
  ocultar:string='';
  collapse:string='collapse navbar-collapse';
  dimensionPantalla:any =0;
  claseTitulo:string = "";

  constructor(private router: Router){}

  @Input() title:string = 'Sin nombre';
  @Input() texto:string = 'Sin texto';

  ngOnInit(): void {
    if(screen.width <= 991){
      this.clase = "header2";
      this.letras = "";
      this.logo = this.url+"logo.png";
    }
    this.ocultar = (screen.width >= 1922) ?'display: none;':'';
    this.dimensionPantalla = screen.height-((15.3/100)*screen.height);
    this.dimensionPantalla = "height:"+((parseInt(this.dimensionPantalla)>=1000)?700:parseInt(this.dimensionPantalla))+"px !important;";
    this.claseTitulo = (this.title == "ICT ZOMAC")? 'card-title reveal': 'card-title showup';
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  @HostListener("window:scroll", []) onWindowScroll() {
      const verticalOffset = window.pageYOffset;
      if(verticalOffset == 0 && screen.width >= 991){
        this.clase = "header";
        this.logo = this.url+"logo.png";
        this.letras = "color:black !important;";
      }else{
        this.clase = "header2";
        this.letras = "";
        this.logo = this.url+"logo.png";
      }
  }

  paginaSelect(dato:any,pagina:string){
    this.collapse = 'collapse navbar-collapse';
    this.router.navigate([pagina]);
  }
}
