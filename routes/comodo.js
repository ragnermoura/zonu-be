const express = require("express");
const router = express.Router();

const comodosController = require("../controllers/comodosController");

router.get("/", comodosController.obterComodos);
router.get("/:id_comodos", comodosController.obterComodoPorId);
router.post("/cadastro", comodosController.criarComodo);
router.put("/:id_comodos", comodosController.atualizarComodo);
router.delete("/:id_comodos", comodosController.deletarComodo);

module.exports = router;
