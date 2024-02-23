const express = require("express");
const router = express.Router();

const complementoController = require("../controllers/complementosController");

router.get("/", complementoController.obterComplementos);
router.get("/:id_complemento", complementoController.obterComplementoPorId);
router.post("/cadastro", complementoController.criarComplemento);
router.put("/:id_complemento", complementoController.atualizarComplemento);
router.delete("/:id_complemento", complementoController.deletarComplemento);

module.exports = router;
