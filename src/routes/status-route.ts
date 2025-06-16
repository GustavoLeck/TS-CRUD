import express from "express";
import { StatusController } from "../controllers/status-controller";
const router = express.Router();

router.get(`/status`, new StatusController().handle);

export default router;
