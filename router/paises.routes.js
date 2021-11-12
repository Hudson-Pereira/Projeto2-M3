const express = require("express");
const router = express.Router();
const PaisController = require("./../controllers/paises.controller");

router.get("/", PaisController.index);

router.get("/listall", PaisController.listAll);

router.get("/listname/:nome", PaisController.listName);

router.post("/add", PaisController.postAdd);

router.put("/update/:id", PaisController.putUpdate);

router.delete("/delete/:id", PaisController.delDelete);

module.exports = router;
