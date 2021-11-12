const express = require("express");
const router = express.Router();
const EstadoController = require("./../controllers/estados.controller");

router.get("/", EstadoController.index);

router.get("/listall", EstadoController.listAll);

router.get("/listname/:nome", EstadoController.listName);

router.post("/add", EstadoController.postAdd);

router.put("/update/:id", EstadoController.putUpdate);

router.delete("/delete/:id", EstadoController.delDelete);

module.exports = router;
