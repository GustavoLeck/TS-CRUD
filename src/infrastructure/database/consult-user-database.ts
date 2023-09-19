import { prisma } from "../../Prisma/prisma";
// import { User } from "../../interfaces/usuario";

export class ConsultUserDatabase {
  async execute(user: any) {
    try {
      const response = await prisma.user.findMany({
        where: {
          Nome: user.Nome,
          Sobrenome: user.Sobrenome,
          Usuario: user.Usuario,
          Senha: user.Senha,
        },
      });
      return {
        status: true,
        message: "Consulta realizada com sucesso.",
        data: response,
      };
    } catch (error) {
      return { status: false, message: error, data: [] };
    }
  }
}
