import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { IncidenciaExame } from '../model/incidencia-exame';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IncidenciaExameService {

    //criando o servico para integrar com a API
  //criar uma classe constructor para acessar os dados externos
  constructor(
    private http:HttpClient
  ) { }

  // criacao de um link para um arquivo json com as informacoes
  // usando observable e um http get para acessar o json
  listIncidenciaExame(): Observable<IncidenciaExame[]>{
    //informamos o caminho da informacao
    const url = '/assets/incidencias.json'
    //solicita as informacoes para o servidor http
    return this.http.get<IncidenciaExame[]>(url);
  } 

  // listIncidenciaExame(): IncidenciaExame[]{
    // return [
    //   {id: 1, regiao_id: 1, mes: 5, faixa_id: 2, qnt_exames: 1}
    // ];
}
