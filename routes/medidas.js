const express = require("express");
const router = express.Router();

const medidasController = require("../controllers/medidasController");

router.get("/", medidasController.obterMedidas);
router.get("/:id_medidas", medidasController.obterMedidaPorId);
router.post("/cadastro", medidasController.criarMedida);
router.put("/:id_medidas", medidasController.atualizarMedida);
router.delete("/:id_medidas", medidasController.deletarMedida);

module.exports = router;
