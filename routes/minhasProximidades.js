const express = require("express");
const router = express.Router();

const minhasProximidadesController = require("../controllers/minhasProximidadesController");

router.get("/", minhasProximidadesController.obterMinhasProximidades);
router.get("/:id_minhas_proximidades", minhasProximidadesController.obterMinhaProximidadePorId);
router.post("/cadastro", minhasProximidadesController.criarMinhaProximidade);
router.put("/:id_minhas_proximidades", minhasProximidadesController.atualizarMinhaProximidade);
router.delete("/:id_minhas_proximidades", minhasProximidadesController.deletarMinhaProximidade);

module.exports = router;
