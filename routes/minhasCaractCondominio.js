const express = require("express");
const router = express.Router();

const minhasCaracteristicasCondominioController = require("../controllers/minhasCaractCondController");

router.get("/", minhasCaracteristicasCondominioController.obterMinhasCaracteristicasCondominio);
router.get("/:id_minhas_caracteristicas_condominio", minhasCaracteristicasCondominioController.obterMinhaCaracteristicaCondominioPorId);
router.post("/cadastro", minhasCaracteristicasCondominioController.criarMinhaCaracteristicaCondominio);
router.put("/:id_minhas_caracteristicas_condominio", minhasCaracteristicasCondominioController.atualizarMinhaCaracteristicaCondominio);
router.delete("/:id_minhas_caracteristicas_condominio", minhasCaracteristicasCondominioController.deletarMinhaCaracteristicaCondominio);

module.exports = router;
