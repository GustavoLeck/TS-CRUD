import express from "express";
import { Request, Response } from "express";

import { CreateUserController } from "../../controllers/User/create-user-controller";
import { ConsultUserController } from "../../controllers/User/consult-user-controller";

const router = express.Router();

router.post(`/user`, new CreateUserController().handle);

router.get(`/user`, new ConsultUserController().handle);

router.put(`/user/:idUser`, (req: Request, res: Response) => {
  res.send({ status: true, message: "Update User" });
});

router.delete(`/user/:idUser`, (req: Request, res: Response) => {
  res.send({ status: true, message: "Delete User" });
});

export default router;
