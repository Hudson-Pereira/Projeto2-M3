const express = require("express");
const app = express();
require("dotenv").config();

const Connected = require("./models/conn/index");
app.use(express.json());

Connected();
const port = 3000;

const routerEstados = require("./router/estados.routes");
app.use("/estados", routerEstados);

const routerPaises = require("./router/paises.routes");
app.use("/paises", routerPaises);

app.listen(process.env.PORT, () => {
  console.log(`Rodando em http://localhost:${process.env.PORT}.`);
});
