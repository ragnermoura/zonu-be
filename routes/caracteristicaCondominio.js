const express = require("express");
const router = express.Router();

const caracteristicasCondominioController = require("../controllers/caracteristicasCondominioController");

router.get("/", caracteristicasCondominioController.obterCaracteristicasCondominio);
router.get("/:id_caracteristica_condominio", caracteristicasCondominioController.obterCaracteristicaCondominioPorId);
router.post("/cadastro", caracteristicasCondominioController.criarCaracteristicaCondominio);
router.put("/:id_caracteristica_condominio", caracteristicasCondominioController.atualizarCaracteristicaCondominio);
router.delete("/:id_caracteristica_condominio", caracteristicasCondominioController.deletarCaracteristicaCondominio);

module.exports = router;
