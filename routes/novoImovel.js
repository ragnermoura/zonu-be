const express = require("express");
const router = express.Router();

const novoImovelController = require("../controllers/novoImovelController");

router.get("/", novoImovelController.obterImoveis);
router.get("/:id_novo_imovel", novoImovelController.obterImovelPorId);
router.post("/cadastro", novoImovelController.criarImovel);
router.put("/:id_novo_imovel", novoImovelController.atualizarImovel);
router.delete("/:id_novo_imovel", novoImovelController.deletarImovel);

module.exports = router;
