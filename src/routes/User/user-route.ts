import express from "express";
import { Request, Response } from "express";

import { CreateUserController } from "../../controllers/user/create-user-controller";
import { ConsultUserController } from "../../controllers/user/consult-user-controller";
import { UpdateUserController } from "../../controllers/user/update-user-controller";

const router = express.Router();

router.post(`/user`, new CreateUserController().handle);

router.get(`/user`, new ConsultUserController().handle);

router.put(`/user`, new UpdateUserController().handle);

router.delete(`/user/:idUser`, (req: Request, res: Response) => {
  res.send({ status: true, message: "Delete User" });
});

export default router;
