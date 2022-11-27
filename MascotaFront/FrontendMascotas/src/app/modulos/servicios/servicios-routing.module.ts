import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignarServicioComponent } from './asignar-servicio/asignar-servicio.component';

const routes: Routes = [
  {
    path:"asignar-servicio",
    component: AsignarServicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiciosRoutingModule { }
