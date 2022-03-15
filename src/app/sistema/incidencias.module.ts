//importa os componentes angular que serao utillizados dentro deste modulo
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';

import { IncidenciasRoutingModule } from './incidencias-routing.module';
import { IncidenciasComponent } from './incidencias/incidencias.component';


@NgModule({
  declarations: [
    IncidenciasComponent
  ],
  
  imports: [
    CommonModule,
    IncidenciasRoutingModule,
    MatSortModule,
    MatCardModule
  ]
})
export class IncidenciasModule { }
