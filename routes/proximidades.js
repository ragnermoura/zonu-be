const express = require("express");
const router = express.Router();

const proximidadesController = require("../controllers/proximidadesController");

router.get("/", proximidadesController.obterProximidades);
router.get("/:id_proximidade", proximidadesController.obterProximidadePorId);
router.post("/cadastro", proximidadesController.criarProximidade);
router.put("/:id_proximidade", proximidadesController.atualizarProximidade);
router.delete("/:id_proximidade", proximidadesController.deletarProximidade);

module.exports = router;
