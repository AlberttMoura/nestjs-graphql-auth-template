import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from 'src/usuario/usuario.service';

@Injectable()
export class AuthService {
  constructor(
    private usuarioService: UsuarioService,
    private jwtService: JwtService,
  ) {}

  async signIn(login: string, senha: string): Promise<string | null> {
    const usuario = await this.usuarioService.findByLoginESenha(login, senha);
    return await this.jwtService.signAsync({
      sub: usuario?.id,
      username: usuario?.email,
    });
  }
}
