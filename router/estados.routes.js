const express = require("express");
const router = express.Router();
const Estado = require("./../model/estados");

router.get("/", (req, res) => {
  res.status(200).json({ message: "Estados Ok" });
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

// router.put("/update/:id", async (req, res) => {
//     if(req.params.id.length)//terminar daqui

// })

module.exports = router;
