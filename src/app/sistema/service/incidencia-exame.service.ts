import { Injectable } from '@angular/core';
import { IncidenciaExame } from '../model/incidencia-exame';

@Injectable({
  providedIn: 'root'
})
export class IncidenciaExameService {

  constructor() { }

  listIncidenciaExame(): IncidenciaExame[]{
    return [
      {id: 1, regiao_id: 1, mes: 5, faixa_id: 2, qnt_exames: 1}
    ];
  }
}
