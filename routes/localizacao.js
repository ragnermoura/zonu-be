const express = require("express");
const router = express.Router();

const Usuario = require('../models/tb_usuarios');

const localizacaoController = require("../controllers/localizacaoController");

router.get("/", localizacaoController.obterLocalizacoes);
router.get("/:id_localizacao", localizacaoController.obterLocalizacaoPorId);
router.post("/cadastro", localizacaoController.criarLocalizacao);
router.put("/:id_localizacao", localizacaoController.atualizarLocalizacao);
router.delete("/:id_localizacao", localizacaoController.deletarLocalizacao);

module.exports = router;
