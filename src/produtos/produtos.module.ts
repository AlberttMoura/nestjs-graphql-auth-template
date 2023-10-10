import { Module } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { ProdutosResolver } from './produtos.resolver';

@Module({
  providers: [ProdutosService, ProdutosResolver],
})
export class ProdutosModule {}
