import { Request, Response } from "express";
import { CreateUser } from "../../use-cases/user/create-user";
import { UserModel } from "../../models/user/user-model";

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const usuarioFormatado = new UserModel(req.body);
    const contaCriada = await new CreateUser().execute(usuarioFormatado);

    if (contaCriada.status) {
      res.status(200).send(contaCriada);
    } else {
      res.status(500).send(contaCriada);
    }
  }
}
