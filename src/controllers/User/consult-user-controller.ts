import { Request, Response } from "express";
import { UserModel } from "../../models/User/user-model";
import { ConsultUser } from "../../use-cases/User/consult-user";

export class ConsultUserController {
  async handle(req: Request, res: Response) {
    const consultFormated = new UserModel(req.body);
    const response = await new ConsultUser().execute(consultFormated);

    if (response.status) {
      res.status(200).send(response);
    } else {
      res.status(500).send(response);
    }
  }
}
