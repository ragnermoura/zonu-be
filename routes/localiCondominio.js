const express = require("express");
const router = express.Router();

const localizacaoCondominioController = require("../controllers/localCondController");

router.get("/", localizacaoCondominioController.obterLocalizacoesCondominio);
router.get("/:id_localizacao_condominio", localizacaoCondominioController.obterLocalizacaoCondominioPorId);
router.post("/cadastro", localizacaoCondominioController.criarLocalizacaoCondominio);
router.put("/:id_localizacao_condominio", localizacaoCondominioController.atualizarLocalizacaoCondominio);
router.delete("/:id_localizacao_condominio", localizacaoCondominioController.deletarLocalizacaoCondominio);

module.exports = router;
