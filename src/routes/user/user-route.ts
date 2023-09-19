import express from "express";
import { Request, Response } from "express";

import { CreateUserController } from "../../controllers/user/create-user-controller";
import { ConsultUserController } from "../../controllers/user/consult-user-controller";
import { UpdateUserController } from "../../controllers/user/update-user-controller";
import { DeleteUserController } from "../../controllers/user/delete-user-controller";

const router = express.Router();

router.post(`/user`, new CreateUserController().handle);

router.get(`/user`, new ConsultUserController().handle);

router.put(`/user`, new UpdateUserController().handle);

router.delete(`/user`, new DeleteUserController().handle);

export default router;
