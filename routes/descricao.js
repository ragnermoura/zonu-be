const express = require("express");
const router = express.Router();

const descricaoController = require("../controllers/descricaoController");

router.get("/", descricaoController.obterDescricoes);
router.get("/:id_descricao", descricaoController.obterDescricaoPorId);
router.post("/cadastro", descricaoController.criarDescricao);
router.put("/:id_descricao", descricaoController.atualizarDescricao);
router.delete("/:id_descricao", descricaoController.deletarDescricao);

module.exports = router;
