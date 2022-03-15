import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncidenciasComponent } from './incidencias/incidencias.component';

//importacao dos componentes da Incidencia - modulo incidencias
const routes: Routes = [
  {
    path:'',
    component: IncidenciasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncidenciasRoutingModule { }
