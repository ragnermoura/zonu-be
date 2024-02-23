const express = require("express");
const router = express.Router();
const emailController = require("../controllers/emailsController");

router.post("/boas-vindas", emailController.enviarBoasVindas);
router.post("/admin/novo-cadastro", emailController.enviarNovoCadastroAnfitriao);
router.post("/admin/envio-doc", emailController.enviarDocAnfitriao);
router.post("/client/troca-senha", emailController.enviarAlteraSenha);
router.post("/client/novo-acesso", emailController.enviarEmailAcesso);



module.exports = router;
