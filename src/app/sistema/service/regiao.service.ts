import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Regiao } from '../model/regiao';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RegiaoService {

  //criando o servico para integrar com a API
  //criar uma classe constructor para acessar os dados externos
  constructor(
    private http:HttpClient
  ) { }

  listRegioes(): Observable<Regiao[]>{
    
    // forma usando uma api rodando na porta 8080
    // por seguranca o browser nao permite acesso direto ao endereco
    // const url = 'locahost:8080/'
    // entao criamos um proxy - arquivo proxy.conf.js na raiz do src
    
    const url = '/api/regiao';
    return this.http.get<Regiao[]>(url);
  }
    
    // forma usando um arquivo json
    // informamos o caminho da informacao Json
    // const url = '/assets/regioes.json'
    // solicita as informacoes para o servidor http
    // return this.http.get<Regiao[]>(url);
    
    // forma usando um objeto local
    // [
    //   {id: 1, regiao: 'Norte', total_exames:1564}
    // ];
}
