const express = require("express");
const app = express();
require("dotenv").config();

const Connected = require("./models/conn/index");
app.use(express.json());

Connected();
//https://projeto2-m3.herokuapp.com/

app.get("/", (req, res) => { //Rota geral
  res.status(200).json({ message: "Rota geral do projeto funcionando" });
});

const routerEstados = require("./router/estados.routes");
app.use("/estados", routerEstados);

const routerPaises = require("./router/paises.routes");
app.use("/paises", routerPaises);

const routerCidades = require("./router/cidades.routes");
app.use("/cidades", routerCidades);

app.listen(process.env.PORT, () => {
  console.log(`Rodando em http://localhost:${process.env.PORT}.`);
});
