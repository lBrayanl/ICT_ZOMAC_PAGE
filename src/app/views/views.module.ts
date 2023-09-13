import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { Acerca_deComponent } from './acerca_de/acerca_de.component';
import { ComponentsModule } from '../components/components.module';
import { NgbCarouselModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { ServicioComponent } from './servicios/servicios.component';

@NgModule({
  declarations: [InicioComponent,Acerca_deComponent,ContactenosComponent,ServicioComponent],
  imports: [CommonModule,ComponentsModule,FormsModule,NgbCarouselModule,NgIf, NgFor,FormsModule, NgbCollapseModule]
})
export class ViewsModule { }
