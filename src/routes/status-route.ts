import express from "express"
import {Request, Response } from 'express';
const router = express.Router();

router.get(`/status`, (req : Request, res : Response)=>{
    console.log("   => Rotas de consulta de status utilizada")
    res.send({status: "Ok"})
})

export default router;