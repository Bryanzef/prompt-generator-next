// Tipos para o gerador de encarte promocional

export interface Produto {
  id: number;
  nome: string;
  preco: string;
}

export interface FormData {
  nomeEstabelecimento: string;
  endereco: string;
  diaPromocao: string;
  dataPromocao: string;
  numProdutos: number;
  produtos: Produto[];
}

export type DiaSemana = 
  | 'Segunda Feira'
  | 'Terça Feira'
  | 'Quarta Feira'
  | 'Quinta Feira'
  | 'Sexta Feira'
  | 'Sábado'
  | 'Domingo';

export type NumeroProdutos = 2 | 3 | 6; 