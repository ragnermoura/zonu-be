const express = require("express");
const router = express.Router();
const userController = require("../controllers/usuariosController");
const { uploadFields } = require("../helpers/file-uploader");
    
router.get("/", userController.obterUsuarios);
router.get("/:id_user", userController.obterUsuarioPorId);
router.patch("/status/", userController.atualizarStatusUsuario);
router.patch("/edit", userController.atualizarUsuario);
router.patch("/dados", userController.trocaSenha);
router.delete("/delete/:id_user", userController.excluirUsuario);

router.post("/cadastro", uploadFields, userController.cadastrarUsuario);
router.post("/cadastro-simples", uploadFields, userController.cadastrarUsuarioSimple);


module.exports = router;