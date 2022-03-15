//configuracoes que serao usados somente no modulo incidencias
import { Component, OnInit } from '@angular/core';
import { Regiao } from '../model/regiao';
import { RegiaoService } from '../service/regiao.service';

@Component({
  selector: 'app-incidencias',
  templateUrl: './incidencias.component.html',
  styleUrls: ['./incidencias.component.css']
})
export class IncidenciasComponent implements OnInit {

  //declarar as variaveis usadas nos modulos

  regioes: Regiao[] = [];

  //declara no constructor
  constructor(private regiaoService:RegiaoService) { }

  //executa quando startar a aplicacao
  ngOnInit(): void {
    //quando o componente abrir ele busca a lista de regioes
    this.regioes = this.regiaoService.listRegioes();
  }

}
