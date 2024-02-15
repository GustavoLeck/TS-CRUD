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
        code: 200,
        message: "Atualização realizada com sucesso.",
        data: response,
      };
    } catch (error) {
      return {
        status: false,
        code: 500,
        message: "Erro ao atualizar conta",
        data: error,
      };
    }
  }
}
