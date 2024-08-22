export type produtos        ={ codigo: number, descricao: string, situacao: string }

export type requisicao     ={ codigo_produto: number, data_requisicao: string, quantidade: number }
export type saldo_estoque  ={ codigo_produto: number, saldo: number }

export type baseProduto = {
  produtos: produtos [],
  requisicao: requisicao[],
  saldo_estoque: saldo_estoque[]

}