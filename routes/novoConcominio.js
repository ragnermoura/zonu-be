const express = require("express");
const router = express.Router();

const novoCondominioController = require("../controllers/novoCondController");

router.get("/", novoCondominioController.obterCondominios);
router.get("/:id_condominio", novoCondominioController.obterCondominioPorId);
router.post("/cadastro", novoCondominioController.criarCondominio);
router.put("/:id_condominio", novoCondominioController.atualizarCondominio);
router.delete("/:id_condominio", novoCondominioController.deletarCondominio);

module.exports = router;
