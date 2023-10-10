import { ParseIntPipe } from '@nestjs/common';
import { Resolver, Query, Args } from '@nestjs/graphql';
import { ProdutosService } from './produtos.service';

@Resolver('Produto')
export class ProdutosResolver {
  constructor(private readonly produtosService: ProdutosService) {}

  @Query('produtoFindAll')
  async produtoFindAll() {
    return this.produtosService.findAll();
  }

  @Query('produtoFindById')
  async produtoFindById(@Args('id', ParseIntPipe) id: number) {
    return this.produtosService.findById(id);
  }
}
