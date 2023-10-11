import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { ProdutoService } from './produto.service';
import { ProdutoSaveInput } from 'src/graphql';
import { AuthGuard } from 'src/auth/auth.guard';

@Resolver('Produto')
export class ProdutoResolver {
  constructor(private readonly produtoService: ProdutoService) {}

  @Query('produtoFindAll')
  @UseGuards(AuthGuard)
  async produtoFindAll() {
    return this.produtoService.findAll();
  }

  @Query('produtoFindById')
  @UseGuards(AuthGuard)
  async produtoFindById(@Args('id', ParseIntPipe) id: number) {
    return this.produtoService.findById(id);
  }

  @Mutation('produtoSave')
  @UseGuards(AuthGuard)
  async produtoSave(
    @Args('produtoSaveInput') produtoSaveInput: ProdutoSaveInput,
  ) {
    return this.produtoService.save(produtoSaveInput);
  }
}
