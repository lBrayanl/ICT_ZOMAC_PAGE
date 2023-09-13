import { Component,ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';


@Component({
  	selector: 'acerca_de-root',
  	templateUrl: './acerca_de.component.html',
  	styleUrls:['./acerca_de.component.css'],
})
export class Acerca_deComponent {
	nombreVista = "NOSOTROS";
	textoInicio =  'Somos una agencia digital formada por un grupo de expertos en la creacion de soluciones informaticas multiplataforma.';
  	title = 'Acerca de ICT ZOMAC';
  	title_2 = 'Nuestro equipo';

	focusImagen :any;
 	showNavigationArrows = false;
	showNavigationIndicators = true;
  	paused = false;
	unpauseOnArrow = false;
	pauseOnIndicator = false;
	pauseOnHover = true;
	pauseOnFocus = true;
	isCollapsed_A = true;
	isCollapsed_D = true;
	isCollapsed_I = true;


  	images = ["../../../assets/image/Grupo.jpeg","../../../assets/image/Grupo2.jpeg","../../../assets/image/Grupo3.jpeg"];

	datos = [
		{imagen:'../../../assets/image/personas/foto1.jpeg',nombre:'Kevin Sanchez',funcion:'Lider de desarrollo'},
		{imagen:'../../../assets/image/personas/foto2.jpeg',nombre:'Fernando Masmela',funcion:'Desarrollador Middle'},
		{imagen:'../../../assets/image/personas/foto3.jpeg',nombre:'Baldomero Osorio',funcion:'Desarrollador Middle'},
		{imagen:'../../../assets/image/personas/foto4.jpeg',nombre:'Jeison Velez',funcion:'Desarrollador Middle'},
		{imagen:'../../../assets/image/personas/foto5.jpeg',nombre:'Kevin Dussan',funcion:'Desarrollador Middle'},
		{imagen:'../../../assets/image/personas/foto6.jpeg',nombre:'Marcos Coca',funcion:'Desarrollador Jr'},
		{imagen:'../../../assets/image/personas/foto7.jpeg',nombre:'Brayan Roa',funcion:'Desarrollador Jr'}
	]

	datos_1 = [
		{imagen:'../../../assets/image/personas/foto_I_1.jpeg',nombre:'Andres',funcion:'Implementador'},
		{imagen:'../../../assets/image/personas/foto_I_2.jpeg',nombre:'Miguel Angel',funcion:'Implementador-Soporte'},
		{imagen:'../../../assets/image/personas/foto_I_3.jpeg',nombre:'Jhon Calderon',funcion:'Implementador'},
		{imagen:'../../../assets/image/personas/foto_I_4.jpeg',nombre:'Moises Bustos',funcion:'Implementador'}
	]

	datos_2 = [
		{imagen:'../../../assets/image/personas/foto_A_1.jpeg',nombre:'Jhon Armesto',funcion:'Analista'},
		{imagen:'../../../assets/image/personas/foto_A_2.jpeg',nombre:'Edwin Rojas',funcion:'Analista'},
		{imagen:'../../../assets/image/personas/foto_A_3.jpeg',nombre:'Claudia',funcion:'Analista'},
		{imagen:'../../../assets/image/personas/foto_A_4.jpeg',nombre:'Felipe Rivera',funcion:'Analistas'}
	]


	@ViewChild('carousel', { static: false }) carousel:any = NgbCarousel;

	togglePaused() {
		if (this.paused) {
			this.carousel.cycle();
		} else {
			this.carousel.pause();
		}
		this.paused = !this.paused;
	}

	onSlide(slideEvent: NgbSlideEvent) {
		if (
			this.unpauseOnArrow &&
			slideEvent.paused &&
			(slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
		) {
			this.togglePaused();
		}
		if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
			this.togglePaused();
		}
	}

	activarFocus(valor:any){
		this.focusImagen = (valor)?'background: rgba(0,0,10,0.5); transition: all 0.5s;':'';
	}
  
	ocultar(dato:string){
		switch (dato) {
			case 'D':
				this.isCollapsed_A = true;
				this.isCollapsed_I = true;
				this.isCollapsed_D = false;
			break;
			case 'I':
				this.isCollapsed_A = true;
				this.isCollapsed_D = true;
				this.isCollapsed_I = false;
			break;
			default:
				this.isCollapsed_D = true;
				this.isCollapsed_I = true;
				this.isCollapsed_A = false;
			break;
		}
	}
}
