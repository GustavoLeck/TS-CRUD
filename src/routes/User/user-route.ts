import express from "express";
import { Request, Response } from "express";

import { CreateUserController } from "../../controllers/User/create-user-controller";

const router = express.Router();

router.post(
  `/user/:Nome/:Sobrenome/:Usuario/:Senha`,
  new CreateUserController().handle
);

router.get(`/user/:idUser`, (req: Request, res: Response) => {
  res.send({ status: true, message: "Consult User" });
});

router.put(`/user/:idUser`, (req: Request, res: Response) => {
  res.send({ status: true, message: "Update User" });
});

router.delete(`/user/:idUser`, (req: Request, res: Response) => {
  res.send({ status: true, message: "Delete User" });
});

export default router;
