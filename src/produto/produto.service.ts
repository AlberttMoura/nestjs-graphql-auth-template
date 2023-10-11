import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Produto, ProdutoSaveInput } from 'src/graphql';
import { Produto as ProdutoModel } from './produto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(ProdutoModel)
    private produtoRepository: Repository<Produto>,
  ) {}

  findAll(): Promise<Produto[]> {
    return this.produtoRepository.find();
  }

  findById(id: number): Promise<Produto | null> {
    return this.produtoRepository.findOneBy({ id });
  }

  save(produtoSaveInput: ProdutoSaveInput): Promise<Produto | null> {
    return this.produtoRepository.save(produtoSaveInput);
  }
}
