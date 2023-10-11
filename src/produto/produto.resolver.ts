import { ParseIntPipe } from '@nestjs/common';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { ProdutoService } from './produto.service';
import { ProdutoSaveInput } from 'src/graphql';

@Resolver('Produto')
export class ProdutoResolver {
  constructor(private readonly produtosService: ProdutoService) {}

  @Query('produtoFindAll')
  async produtoFindAll() {
    return this.produtosService.findAll();
  }

  @Query('produtoFindById')
  async produtoFindById(@Args('id', ParseIntPipe) id: number) {
    return this.produtosService.findById(id);
  }

  @Mutation('produtoSave')
  async produtoSave(
    @Args('produtoSaveInput') produtoSaveInput: ProdutoSaveInput,
  ) {
    return this.produtosService.save(produtoSaveInput);
  }
}
