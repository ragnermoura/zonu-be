const express = require("express");
const router = express.Router();

const caracteristicaController = require("../controllers/caracteristicaController");

router.get("/", caracteristicaController.obterCaracteristicas);
router.get("/:id_caracteristica", caracteristicaController.obterCaracteristicaPorId);
router.post("/cadastro", caracteristicaController.criarCaracteristica);
router.put("/:id_caracteristica", caracteristicaController.atualizarCaracteristica);
router.delete("/:id_caracteristica", caracteristicaController.deletarCaracteristica);

module.exports = router;
