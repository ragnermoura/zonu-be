const express = require("express");
const router = express.Router();

const precoController = require("../controllers/precoController");

router.get("/", precoController.obterPrecos);
router.get("/:id_preco", precoController.obterPrecoPorId);
router.post("/cadastro", precoController.criarPreco);
router.put("/:id_preco", precoController.atualizarPreco);
router.delete("/:id_preco", precoController.deletarPreco);

module.exports = router;
