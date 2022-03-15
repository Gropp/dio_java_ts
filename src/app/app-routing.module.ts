import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//carregando os modulos secundarios dentro do modulo principal
//testa se o path é o padrao, se for redireciona
const routes: Routes = [
  {
    path:'', pathMatch:'full', redirectTo:'incidencias'
  },
  {
    path: 'incidencias',
    loadChildren: () => import('./sistema/incidencias.module').then(m => m.IncidenciasModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
