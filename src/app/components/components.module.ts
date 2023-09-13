import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NvarComponent } from './Nvar/Nvar.component';
import { FooterComponent } from './Footer/Footer.component';

@NgModule({
  declarations: [NvarComponent,FooterComponent],
  imports: [CommonModule],
  exports:[NvarComponent, FooterComponent]
})
export class ComponentsModule { }
