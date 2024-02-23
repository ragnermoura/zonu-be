const express = require("express");
const router = express.Router();
const userController = require("../controllers/usuariosController");


router.get("/", userController.obterUsuarios);
router.get("/:id_user", userController.obterUsuarioPorId);
router.patch("/edit", userController.atualizarUsuario);
router.patch("/dados", userController.atualizarDadosUsuario);
router.delete("/delete", userController.excluirUsuario);
router.post("/cadastro", userController.cadastrarUsuario);


module.exports = router;