//Cria servidor na porta 3000
//http://localhost:80 A porta 80 é padrão para HTTP
import express, { Request, Response } from "express";
const server = express();

//Pagina inicial do servidor
server.get("/", (req: Request, res: Response) => {
  res.send("Ola");
});

//Rota dinamica
server.get("/noticia/:slug", (req: Request, res: Response) => {
  let slug = req.params.slug;
  res.send(`noticia: ${slug}`);
});

//Exemplo viagem
server.get("/voo/:de-:para", (req: Request, res: Response) => {
  //let de = req.params.de;
  //let para = req.params.para;
  // Ou
  let { de, para } = req.params;

  res.send(`Viagem de: ${de} para ${para}`);
});

//Usando arquivo separado para rotas
import mainRoutes from "./routes/index";
import painelRoutes from "./routes/painel";

server.use(mainRoutes); //Usando rotas do arquivo
server.use("/painel", painelRoutes);

server.listen(80);
