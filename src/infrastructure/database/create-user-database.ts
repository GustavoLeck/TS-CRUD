import { prisma } from "../../Prisma/prisma";
import { User } from "../../interfaces/usuario";

export class CreateUserDatabase {
  async execute(user: User) {
    try {
      await prisma.user.create({
        data: {
          Nome: user.Nome,
          Sobrenome: user.Sobrenome,
          Usuario: user.Usuario,
          Senha: user.Senha,
        },
      });
      return { status: true, message: "Conta criada com sucesso." };
    } catch (error) {
      return { status: false, message: error };
    }
  }
}
