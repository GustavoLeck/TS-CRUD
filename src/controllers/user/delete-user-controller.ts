import { Request, Response } from "express";
import { DeleteUser } from "../../use-cases/user/delete-user";

export class DeleteUserController {
  async handle(req: Request, res: Response) {
    const contaDeletada = await new DeleteUser().execute(req.body.idUser);
    return res.status(contaDeletada.code).send(contaDeletada);
  }
}
