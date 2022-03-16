//configuracoes que serao usados somente no modulo incidencias
import { Component, OnInit } from '@angular/core';
import { FaixaEtaria } from '../model/faixa-etaria';
import { IncidenciaExame } from '../model/incidencia-exame';
import { Regiao } from '../model/regiao';
import { FaixaEtariaService } from '../service/faixa-etaria.service';
import { IncidenciaExameService } from '../service/incidencia-exame.service';
import { RegiaoService } from '../service/regiao.service';

@Component({
  selector: 'app-incidencias',
  templateUrl: './incidencias.component.html',
  styleUrls: ['./incidencias.component.css']
})
export class IncidenciasComponent implements OnInit {

  //declarar as variaveis usadas nos modulos

  regioes: Regiao[] = [];
  incidenciaExame: IncidenciaExame[] = [];
  faixaEtaria: FaixaEtaria[] = [];

  //declara no constructor
  constructor(private regiaoService:RegiaoService, private incidenciaExameService:IncidenciaExameService, private faixaEtariaService:FaixaEtariaService ) { }

  //executa quando startar a aplicacao
  ngOnInit(): void {
    //quando o componente abrir ele busca a lista de regioes
    this.regioes = this.regiaoService.listRegioes();
    this.incidenciaExame = this.incidenciaExameService.listIncidenciaExame();
    this.faixaEtaria = this.faixaEtariaService.listFaixaEtaria();
  }

}
