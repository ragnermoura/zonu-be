const express = require("express");
const router = express.Router();
const usuariosController = require("../controllers/recoveryController");

router.post("/validar-email", usuariosController.validaEmail);
router.patch("/alterar-senha", usuariosController.alterarSenha);

module.exports = router;
