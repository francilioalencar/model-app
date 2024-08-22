import { Component, Input, OnInit } from '@angular/core';
import { ProdutoHttpService } from '../../service/produtos/produto-http.service';
import { baseProduto, produtos, requisicao, saldo_estoque } from '../../model/produto';
import { response } from 'express';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.scss'
})


export class ProdutoComponent implements OnInit {


  @Input() idSelect: number = 0;


  produtos: produtos[] = []
  requisicao: requisicao[] = []
  requisicaoProduto: requisicao[] = []
  saldoEstoque: saldo_estoque[] = []
  base: baseProduto[] = [];

  diaEstoque : number = 0;
  quantidasdeRequisitadaEstoque : number = 0;
  quantidasdeEstoque : number = 0;
  consumoMedioItem : number = 0;


  constructor(public http: ProdutoHttpService) { }

  ngOnInit(): void {

    this.setParametros()


  }

  setParametros() {
    this.http.getBase().subscribe((response) => {
      this.base = response;

      this.produtos = this.base[0].produtos
      this.requisicao = this.base[0].requisicao
      this.saldoEstoque = this.base[0].saldo_estoque


      console.log(this.base)
    });
  }


    selectId(id: number): void {

      this.idSelect = id;

      this.requisicaoProduto = this.requisicao.filter(i => i.codigo_produto === this.idSelect).sort((a, b) => new Date(a.data_requisicao).getTime() - new Date(b.data_requisicao).getTime());
      if(this.requisicaoProduto.length === 0){
        this.quantidasdeEstoque =  0
        this.diaEstoque = 0
        this.quantidasdeRequisitadaEstoque = 0
        this.consumoMedioItem = 0

        throw new Error("Não há registro de requisição para este item");
      }
      this.quantidasdeEstoque =  this.saldoEstoque.filter(i=> i.codigo_produto === id)[0].saldo
      this.diaEstoque = this.calcularDiasEstoque()
      this.quantidasdeRequisitadaEstoque = this.calcularRequisicoesEstoque()
      this.consumoMedioItem = this.diaEstoque === 0 ? this.quantidasdeRequisitadaEstoque : this.quantidasdeRequisitadaEstoque / this.diaEstoque

    }


  calcularDiasEstoque():number{
    let diaEstoqueIncio = new Date( this.requisicaoProduto[0].data_requisicao ).getTime()
    let diaEstoqueFim   = new Date(this.requisicaoProduto[this.requisicaoProduto.length - 1].data_requisicao).getTime()
    return  (diaEstoqueFim - diaEstoqueIncio)/ (1000 * 60 * 60 * 24) 
  }
  /*
  1000 milissegundos equivalem a 1 segundo.
  60 * 1000 milissegundos equivalem a 1 minuto.
  60 * 60 * 1000 milissegundos equivalem a 1 hora.
  24 * 60 * 60 * 1000 milissegundos equivalem a 1 dia.
  1000 * 60 * 60 * 24 é o número de milissegundos em um dia.
 */

  calcularRequisicoesEstoque():number{

    let quantidadeEstoqueRequisitada : number = 0;

    this.requisicaoProduto.map(item=>(
      quantidadeEstoqueRequisitada += item.quantidade
    ))

    return quantidadeEstoqueRequisitada
  }



}
