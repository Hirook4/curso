//Arquivo para criar rotas
import { Router, Request, Response } from "express";
const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Ola Mundo");
});

router.get("/contato", (req: Request, res: Response) => {
  res.send("Formulario de Contato");
});

router.get("/sobre", (req: Request, res: Response) => {
  res.send("Formulario de Contato");
});

export default router;
