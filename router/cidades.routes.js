const express = require("express");
const router = express.Router();
const Cidade = require("./../models/cidades");

router.get("/", (req, res) => { //Rota geral Cidades
  res.status(200).json({ message: "Rota Cidades funcionando" });
});

router.get("/listall", async (req, res) => { //listagem de todos os itens da rota cidades
  await Cidade.find({})
    .then((cidades) => {
      res.status(200).json(cidades);
    })
    .catch((err) => {
      res.status(400).json({ message: "Não foi encontrado nenhuma cidade!" });
      console.error(err);
    });
});

router.get("/listname/:nome", async (req, res) => { //listagem de item por nome da rota cidades
  await Cidade.findOne({ nome: req.params.nome })
    .then((cidade) => {
      res.status(200).json(cidade);
    })
    .catch((err) => {
      res.status(400).json({ message: "Cidade não encontrada!" });
      console.error(err);
    });
});

router.post("/add", async (req, res) => { //adicionar novo item na rota cidades
  if (!req.body.nome) {
    res.status(400).json({ message: "Campo incompleto! É necessário colocar o nome da cidade!" });
    return;
  } else if (!req.body.qtdDeBairros) {
    res.status(400).json({ message: "Campo incompleto! É necessário colocar a quantidade de bairros!" });
    return;
  } else if (typeof req.body.qtdDeBairros != 'number') {
    res.status(400).json({ message: "A quantidade de bairros deve ser um número!" });
    return;
  } else if (!req.body.populacao) {
    res.status(400).json({ message: "Campo incompleto! É necessário colocar a população da cidade!" });
    return;
  } else if (typeof req.body.populacao != 'number') {
    res.status(400).json({ message: "A população deve ser um número!" });
    return;
  } else if (!req.body.aniversarioCidade) {
    res.status(400).json({ message: "Campo incompleto! É necessário colocar o aniversário da cidade!" });
    return;
  }
  await Cidade.create(req.body)
    .then(() => {
      res.status(200).json({ message: `Cidade adicionada com sucesso.` });
    })
    .catch((err) => {
      res.status(400).json({ message: "Ocorreu um erro no cadastro! Tente novamente." });
      console.error(err);
    });
});

router.put("/update/:id", async (req, res) => { //atualizar um item na rota cidades por id
    if (!req.body.nome) {
        res.status(400).json({ message: "Campo incompleto! É necessário colocar o nome da cidade!" });
        return;
      } else if (!req.body.qtdDeBairros) {
        res.status(400).json({ message: "Campo incompleto! É necessário colocar a quantidade de bairros!" });
        return;
      } else if (typeof req.body.qtdDeBairros != 'number') {
        res.status(400).json({ message: "A quantidade de bairros deve ser um número!" });
        return;
      } else if (!req.body.populacao) {
        res.status(400).json({ message: "Campo incompleto! É necessário colocar a população da cidade!" });
        return;
      } else if (typeof req.body.populacao != 'number') {
        res.status(400).json({ message: "A população deve ser um número!" });
        return;
      } else if (!req.body.aniversarioCidade) {
        res.status(400).json({ message: "Campo incompleto! É necessário colocar o aniversário da cidade!" });
        return;
      }
  if (req.params.id.length == 24) { //verificação da ID
    await Cidade.updateOne({ _id: req.params.id }, req.body)
      .then(() => {
        res.status(200).json({ message: "Cidade atualizada!" });
      })
      .catch(() => res.status(400).json({ message: "Ocorreu um erro! Tente novamente." }));
  }
  res.status(400).json({
    message:
      "Número de ID não encontrado, verifique o número e tente novamente.",
  });
});

router.delete("/delete/:id", async (req, res) => { //deletar um item da rota países por id
  if (req.params.id.length == 24) {
    await Cidade.deleteOne({ _id: req.params.id })
      .then(() => {
        res.status(200).json({ message: "Cidade excluída!" });
      })
      .catch(() => {
        res.status(400).json({ message: "Ocorreu um erro! Tente novamente." });
      });
  }
  res.status(400).json({
    message:
      "Número de ID não encontrado, verifique o número e tente novamente.",
  });
});

module.exports = router;
