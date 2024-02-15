import { Request, Response } from "express";
import { UserModel } from "../../models/user/user-model";
import { ConsultUser } from "../../use-cases/user/consult-user";

export class ConsultUserController {
  async handle(req: Request, res: Response) {
    const consultFormated = new UserModel(req.body);
    const response = await new ConsultUser().execute(consultFormated);
    return res.status(response.code).send(response);
  }
}
