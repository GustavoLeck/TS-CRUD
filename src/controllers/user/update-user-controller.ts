import { Request, Response } from "express";
import { UpdateUser } from "../../use-cases/user/update-user";
import { UserModel } from "../../models/user/user-model";

export class UpdateUserController {
  async handle(req: Request, res: Response) {
    const usuarioFormatado = new UserModel(req.body);
    const contaAtualizada = await new UpdateUser().execute(
      req.body.idUser,
      usuarioFormatado
    );

    if (contaAtualizada.status) {
      res.status(200).send(contaAtualizada);
    } else {
      res.status(500).send(contaAtualizada);
    }
  }
}
