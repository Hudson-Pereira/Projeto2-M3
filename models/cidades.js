const mongoose = require("mongoose");

const cidadeModel = new mongoose.Schema({
  nome: { type: String, required: true },
  qtdDeBairros: { type: Number, required: true },
  populacao: { type: Number, required: true },
  aniversarioCidade: { type: Date, required: true },
  dataCriacao: { type: Date, default: Date.now },
});

const Cidade = mongoose.model("Cidades", cidadeModel);

module.exports = Cidade;
