import { Injectable } from '@nestjs/common';
import { Produto } from 'src/graphql';

@Injectable()
export class ProdutosService {
  private readonly produtos: Array<Produto> = [
    { id: 1, descricao: 'Produto 1' },
    { id: 2, descricao: 'Produto 2' },
  ];

  findAll(): Produto[] {
    return this.produtos;
  }

  findById(id: number): Produto | undefined {
    return this.produtos.find((produto) => produto.id === id);
  }
}
