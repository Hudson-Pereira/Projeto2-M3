const express = require("express");
const router = express.Router();
const Pais = require("./../models/paises");

router.get("/", (req, res) => { //Rota geral paises
  res.status(200).json({ message: "Rota Paises funcionando" });
});

router.get("/listall", async (req, res) => { //listagem de todos os itens da rota países
  await Pais.find({})
    .then((paises) => {
      res.status(200).json(paises);
    })
    .catch((err) => {
      res.status(400).json({ message: "Não foi encontrado nenhum país!" });
      console.error(err);
    });
});

router.get("/listname/:nome", async (req, res) => { //listagem de item por nome da rota países
  await Pais.findOne({ nome: req.params.nome })
    .then((pais) => {
      res.status(200).json(pais);
    })
    .catch((err) => {
      res.status(400).json({ message: "País não encontrado!" });
      console.error(err);
    });
});

router.post("/add", async (req, res) => { //adicionar novo item na rota países
  if (!req.body.nome) {
    res.status(400).json({ message: "Campo incompleto! É necessário colocar o nome do país!" });
    return;
  } else if (!req.body.populacao) {
    res.status(400).json({ message: "Campo incompleto! É necessário colocar a população do país!" });
    return;
  } else if (typeof req.body.populacao != 'number') {
    res.status(400).json({ message: "A população deve ser um número!" });
    return;
  } else if (!req.body.linguaMae) {
    res.status(400).json({ message: "Campo incompleto! É necessário colocar a língua mãe do país!" });
    return;
  } else if (!req.body.pib) {
    res.status(400).json({ message: "Campo incompleto! É necessário colocar o PIB do país!" });
    return;
  } else if (typeof req.body.pib != 'number') {
    res.status(400).json({ message: "O PIB deve ser um número!" });
    return;
  }
  await Pais.create(req.body)
    .then(() => {
      res.status(200).json({ message: `País adicionado com sucesso.` });
    })
    .catch((err) => {
      res.status(400).json({ message: "Ocorreu um erro no cadastro! Tente novamente." });
      console.error(err);
    });
});

router.put("/update/:id", async (req, res) => { //atualizar um item na rota paises por id
    if (!req.body.nome) {
        res.status(400).json({ message: "Campo incompleto! É necessário colocar o nome do país!" });
        return;
      } else if (!req.body.populacao) {
        res.status(400).json({ message: "Campo incompleto! É necessário colocar a população do país!" });
        return;
      } else if (typeof req.body.populacao != 'number') {
        res.status(400).json({ message: "A população deve ser um número!" });
        return;
      } else if (!req.body.linguaMae) {
        res.status(400).json({ message: "Campo incompleto! É necessário colocar a língua mãe do país!" });
        return;
      } else if (!req.body.pib) {
        res.status(400).json({ message: "Campo incompleto! É necessário colocar o PIB do país!" });
        return;
      } else if (typeof req.body.pib != 'number') {
        res.status(400).json({ message: "O PIB deve ser um número!" });
        return;
      }
  if (req.params.id.length == 24) { //verificação da ID
    await Pais.updateOne({ _id: req.params.id }, req.body)
      .then(() => {
        res.status(200).json({ message: "País atualizado!" });
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
    await Pais.deleteOne({ _id: req.params.id })
      .then(() => {
        res.status(200).json({ message: "País excluído!" });
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
