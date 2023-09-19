export class UserModel {
  public Nome: string;
  public Sobrenome: string;
  public Usuario: string;
  public Senha: string;

  constructor(usuario: any) {
    this.Nome = usuario.Nome;
    this.Sobrenome = usuario.Sobrenome;
    this.Usuario = usuario.Usuario;
    this.Senha = usuario.Senha;
  }
}
