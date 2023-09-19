import { prisma } from "../../Prisma/prisma";
import { User } from "../../interfaces/usuario";

export class UpdateUserDatabase {
  async execute(idUser: string, user: User) {
    try {
      const response = await prisma.user.update({
        where: {
          id: idUser,
        },
        data: {
          Nome: user.Nome,
          Sobrenome: user.Sobrenome,
          Usuario: user.Usuario,
          Senha: user.Senha,
        },
      });
      return {
        status: true,
        message: "Atualização realizada com sucesso.",
        data: response,
      };
    } catch (error) {
      return { status: false, message: error, data: [] };
    }
  }
}
