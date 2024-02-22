const express = require("express");
const router = express.Router();

const proprietarioController = require("../controllers/proprietarioController");

router.get("/", proprietarioController.obterProprietarios);
router.get("/:id_proprietario", proprietarioController.obterProprietarioPorId);
router.post("/cadastro", proprietarioController.criarProprietario);
router.put("/:id_proprietario", proprietarioController.atualizarProprietario);
router.delete("/:id_proprietario", proprietarioController.deletarProprietario);

module.exports = router;
