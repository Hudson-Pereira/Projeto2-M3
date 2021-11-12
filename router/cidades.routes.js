const express = require("express");
const router = express.Router();
const CidadeController = require("./../controllers/cidades.controller");

router.get("/", CidadeController.index);

router.get("/listall", CidadeController.listAll);

router.get("/listname/:nome", CidadeController.listName);

router.post("/add", CidadeController.postAdd);

router.put("/update/:id", CidadeController.putUpdate);

router.delete("/delete/:id", CidadeController.delDelete);

module.exports = router;
