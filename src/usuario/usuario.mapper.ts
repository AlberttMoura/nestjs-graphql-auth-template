import { UsuarioSaveInput } from 'src/graphql';
import { Usuario } from './usuario.entity';

export class UsuarioMapper {
  static usuarioSaveInputToEntity(usuarioSaveInput: UsuarioSaveInput) {
    const usuario: Usuario = {
      id: usuarioSaveInput.id,
      email: usuarioSaveInput.email,
      senha: usuarioSaveInput.senha,
    };
    return usuario;
  }
}
