import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioOutput, UsuarioSaveInput } from 'src/graphql';
import { Usuario, Usuario as UsuarioModel } from './usuario.entity';
import { Repository } from 'typeorm';
import { UsuarioMapper } from './usuario.mapper';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(UsuarioModel)
    private usuarioRepository: Repository<UsuarioModel>,
  ) {}

  findAll(): Promise<UsuarioOutput[]> {
    return this.usuarioRepository.find();
  }

  findByLoginESenha(email: string, senha: string): Promise<Usuario | null> {
    return this.usuarioRepository.findOneBy({ email, senha });
  }

  findById(id: number): Promise<UsuarioOutput | null> {
    return this.usuarioRepository.findOneBy({ id });
  }

  save(usuarioSaveInput: UsuarioSaveInput): Promise<UsuarioOutput | null> {
    return this.usuarioRepository.save(
      UsuarioMapper.usuarioSaveInputToEntity(usuarioSaveInput),
    );
  }
}
