//Arquivo para criar rotas
import { Router, Request, Response } from "express";
const router = Router();

router.get("/", (req: Request, res: Response) => {
  let age: number = 51;
  let showAge: boolean = false;
  if (age > 50) {
    showAge = true;
  }

  res.render("home", {
    user: "Leo",
    age,
    showAge,
    products: [
      { title: "Alho", price: 10 },
      { title: "Banana", price: 15 },
      { title: "Caju", price: 20 },
    ],
    frases: ["frase 1", "frase 2", "frase 3"],
  }); //Enviando para home.mustache
});

router.get("/contato", (req: Request, res: Response) => {
  res.render("contato");
});

router.get("/sobre", (req: Request, res: Response) => {
  res.render("sobre");
});

export default router;
