const express = require("express");
const router = express.Router();

const minhasCaracteristicasController = require("../controllers/minhasCaracteristicasController");

router.get("/", minhasCaracteristicasController.obterMinhasCaracteristicas);
router.get("/:id_minhas_caracteristicas", minhasCaracteristicasController.obterMinhaCaracteristicaPorId);
router.post("/cadastro", minhasCaracteristicasController.criarMinhaCaracteristica);
router.put("/:id_minhas_caracteristicas", minhasCaracteristicasController.atualizarMinhaCaracteristica);
router.delete("/:id_minhas_caracteristicas", minhasCaracteristicasController.deletarMinhaCaracteristica);

module.exports = router;
