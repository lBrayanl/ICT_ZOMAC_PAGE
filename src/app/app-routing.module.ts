import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Acerca_deComponent } from './views/acerca_de/acerca_de.component';
import { ContactenosComponent } from './views/contactenos/contactenos.component';
import { ErrorComponent } from './views/error/error.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { ServicioComponent } from './views/servicios/servicios.component';

const routes: Routes = [
  {path: '', redirectTo:'/Inicio', pathMatch: 'full' },
  {path: 'Inicio', component: InicioComponent},
  {path: 'Nosotros', component: Acerca_deComponent},
  {path: 'Contactenos', component: ContactenosComponent},
  {path: 'Servicios', component: ServicioComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
