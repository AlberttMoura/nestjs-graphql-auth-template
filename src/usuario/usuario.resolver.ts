import { ParseIntPipe } from '@nestjs/common';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UsuarioService } from './usuario.service';
import { UsuarioSaveInput } from 'src/graphql';

@Resolver('Usuario')
export class UsuarioResolver {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Query('usuarioFindAll')
  async usuarioFindAll() {
    return this.usuarioService.findAll();
  }

  @Query('usuarioFindById')
  async usuarioFindById(@Args('id', ParseIntPipe) id: number) {
    return this.usuarioService.findById(id);
  }

  @Mutation('usuarioSave')
  async usuarioSave(
    @Args('usuarioSaveInput') usuarioSaveInput: UsuarioSaveInput,
  ) {
    return this.usuarioService.save(usuarioSaveInput);
  }
}
