const mongoose = require("mongoose");

const paisModel = new mongoose.Schema({
  nome: { type: String, required: true },
  populacao: { type: Number, required: true },
  linguaMae: { type: String, required: true },
  pib: { type: Number, required: true },
  dataCriacao: { type: Date, default: Date.now },
});

const Pais = mongoose.model("Paises", paisModel);

module.exports = Pais;
