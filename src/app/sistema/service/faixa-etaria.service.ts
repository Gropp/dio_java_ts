import { Injectable } from '@angular/core';
import { FaixaEtaria } from '../model/faixa-etaria';

@Injectable({
  providedIn: 'root'
})
export class FaixaEtariaService {

  constructor() { }
  
  listFaixaEtaria(): FaixaEtaria[]{
    return [
      {id: 1, faixa_i: 1, faixa_n: 10, descricao: 'Até 10 anos'}
    ];
  }
}
