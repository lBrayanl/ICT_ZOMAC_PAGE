import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'inicio-root',
  templateUrl: './inicio.component.html',
  styleUrls:['./inicio.component.css']
})
export class InicioComponent {
  nombrevista = 'ICT ZOMAC';
  textoInicio = 'Somos una empresa de desarrollo de software que surge ante una premisa y una necesidad, por un lado la premisa de crear soluciones inteligentes y especificas, por otro lado la necesidad de solucionar la gran cantidad de problemas que afectan a las empresas y a las personas en su vida diaria.';
  scrollHe = 0;

  @HostListener("window:scroll", []) onWindowScroll() {
    const verticalOffset = window.pageYOffset;
    console.log(verticalOffset);
    if(verticalOffset >= 510){
      this.repeat1();  
      this.repeat2();
      this.repeat3();
      this.repeat4();
    }
  }

  contador1 = 0;
  contador2 = 0;
  contador3 = 0;
  contador4 = 0;

  repeat1(){
    if (this.contador1 >= 56) return;
    setTimeout(()=>{
      this.contador1++;
      this.repeat1();
    }, 30);
  };

  repeat2(){
    if (this.contador2 >= 1) return;
    setTimeout(()=>{
      this.contador2++;
      this.repeat2();
    }, 30);
  };

  repeat3(){
    if (this.contador3 >= 5) return;
    setTimeout(()=>{
      this.contador3++;
      this.repeat3();
    }, 30);
  };

  repeat4(){
    if (this.contador4 >= 102) return;
    setTimeout(()=>{
      this.contador4++;
      this.repeat4();
    }, 30);
  };

}
