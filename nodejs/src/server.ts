//Cria servidor na porta 3000
//http://localhost:80 A porta 80 é padrão para HTTP
import express, { Request, Response } from "express";
const server = express();

//Pagina inicial do servidor
/* server.get("/", (req: Request, res: Response) => {
  res.send("Ola");
}); */

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
server.use((req: Request, res: Response) => {
  res.status(404).send("Pagina Nao Encontrada");
}); //Rota 404

//Tornar pasta public publica
import path from "path"; //Biblioteca que percorre caminhos para comandos do servidor
server.use("/static", express.static(path.join(__dirname, "../public"))); //Express torna essa pasta estatica (transforma em rota)

//Usando template engine mustache
import mustache from "mustache-express";
server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "views"));
server.engine("mustache", mustache());

server.listen(80);
