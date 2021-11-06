const express = require("express");
const router = express.Router();
const Estado = require("./../models/estados");

router.get("/", (req, res) => {
  res.status(200).json({ message: "Rota inicial Estados Ok" });
});

router.get("/listall", async (req, res) => {
  await Estado.find({})
    .then((estados) => {
      res.status(200).json(estados);
    })
    .catch((err) => {
      res.status(400).json({ message: "Nada encontrado..." });
      console.error(err);
    });
});
// tratar retorno null em caso de nao encontrar o nome
router.get("/listname/:nome", async (req, res) => {
  await Estado.findOne({ nome: req.params.nome })
    .then((estado) => {
      res.status(200).json(estado);
    })
    .catch((err) => {
      res.status(400).json({ message: "ERROR" });
      console.error(err);
    });
});

router.post("/add", async (req, res) => {
  if (!req.body.nome) {
    res.status(400).json({ message: "Falta nome..." });
    return;
  } else if (!req.body.regiao) {
    res.status(400).json({ message: "Falta regiao..." });
    return;
  } else if (!req.body.populacao) {
    res.status(400).json({ message: "Falta populacao..." });
    return;
  }
  await Estado.create(req.body)
    .then(() => {
      res.status(200).json({ message: `Estado adicionado com sucesso.` });
    })
    .catch((err) => {
      res
        .status(400)
        .json({ message: "ERROR!!! Verifique os dados e tente novamente." });
      console.error(err);
    });
});

router.put("/update/:id", async (req, res) => {
  if (!req.body.nome) {
    res.status(400).json({ message: "Falta nome..." });
    return;
  } else if (!req.body.regiao) {
    res.status(400).json({ message: "Falta regiao..." });
    return;
  } else if (!req.body.populacao) {
    res.status(400).json({ message: "Falta populacao..." });
    return;
  }
  if (req.params.id.length == 24) {
    await Estado.updateOne({ _id: req.params.id }, req.body)
      .then(() => {
        res.status(200).json({ message: "Estado alterado com sucesso." });
      })
      .catch(() => res.status(400).json({ message: "ERROR" }));
  }
  res.status(400).json({
    message:
      "Número de ID não encontrado, verifique o número e tente novamente.",
  });
});

router.delete("/delete/:id", async (req, res) => {
  if (req.params.id.length == 24) {
    await Estado.deleteOne({ _id: req.params.id })
      .then(() => {
        res.status(200).json({ message: "Estado excluido com sucesso." });
      })
      .catch(() => {
        res.status(400).json({ message: "ERROR" });
      });
  }
  res.status(400).json({
    message:
      "Número de ID não encontrado, verifique o número e tente novamente.",
  });
});

module.exports = router;
