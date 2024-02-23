const express = require("express");
const router = express.Router();
const perfilController = require("../controllers/perfilController");

router.get("/", perfilController.obterPerfil);
router.get("/:id_perfil", perfilController.obterPerfilPorId);
router.patch("/edit", perfilController.atualizarPerfil);
router.delete("/delete", perfilController.excluirPerfil);
router.post("/cadastro", perfilController.cadastrarPerfil);

module.exports = router;