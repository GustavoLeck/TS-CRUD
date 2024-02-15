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
        code: 200,
        message: "Consulta realizada com sucesso.",
        data: response,
      };
    } catch (error) {
      return { status: false, code: 500, message: error, data: [] };
    }
  }
}
