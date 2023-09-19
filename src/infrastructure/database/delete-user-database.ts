import { prisma } from "../../Prisma/prisma";

export class DeleteUserDatabase {
  async execute(idUser: string) {
    try {
      const response = await prisma.user.delete({
        where: {
          id: idUser,
        },
      });
      return {
        status: true,
        message: "Exclusão realizada com sucesso.",
        data: response,
      };
    } catch (error) {
      return { status: false, message: error, data: [] };
    }
  }
}
