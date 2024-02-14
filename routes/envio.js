const express = require("express");
const router = express.Router();
const emailController = require("../controllers/emailsController");

router.post("/boas-vindas", emailController.enviarBoasVindas);
router.post("/admin/novo-cadastro", emailController.enviarNovoCadastroAnfitriao);
router.post("/admin/envio-doc", emailController.enviarDocAnfitriao);
router.post("/client/troca-senha", emailController.enviarAlteraSenha);
router.post("/client/novo-acesso", emailController.enviarEmailAcesso);

/**
 * @swagger
 * components:
 *   schemas:
 *     EmailRequest:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           description: O endereço de email do destinatário
 *         nome:
 *           type: string
 *           description: O nome do destinatário
 *         id:
 *           type: integer
 *           description: O ID do usuário (apenas para boas-vindas)
 *         perfil:
 *           type: string
 *           description: O perfil do usuário (apenas para boas-vindas)
 *         nomecliente:
 *           type: string
 *           description: O nome do cliente (apenas para novo cadastro de anfitrião)
 *         regiao:
 *           type: string
 *           description: A região do acesso (para novo acesso e troca de senha)
 *         plataforma:
 *           type: string
 *           description: A plataforma utilizada (para novo acesso e troca de senha)
 *         navegador:
 *           type: string
 *           description: O navegador utilizado (para novo acesso e troca de senha)
 *         enderecoIp:
 *           type: string
 *           description: O endereço IP do acesso (para novo acesso e troca de senha)
 */

/**
 * @swagger
 * /boas-vindas:
 *   post:
 *     summary: Envia um email de boas-vindas
 *     tags: [Email]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EmailRequest'
 *     responses:
 *       200:
 *         description: Email enviado com sucesso
 *       500:
 *         description: Erro ao enviar email
 */


/**
 * @swagger
 * /admin/novo-cadastro:
 *   post:
 *     summary: Envia um email informando sobre um novo cadastro de anfitrião
 *     tags: [Email]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EmailRequest'
 *     responses:
 *       200:
 *         description: Email enviado com sucesso
 *       500:
 *         description: Erro ao enviar email
 */


/**
 * @swagger
 * /admin/envio-doc:
 *   post:
 *     summary: Envia um email sobre o envio de documentos de um anfitrião
 *     tags: [Email]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EmailRequest'
 *     responses:
 *       200:
 *         description: Email enviado com sucesso
 *       500:
 *         description: Erro ao enviar email
 */


/**
 * @swagger
 * /client/troca-senha:
 *   post:
 *     summary: Envia um email de confirmação de troca de senha
 *     tags: [Email]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EmailRequest'
 *     responses:
 *       200:
 *         description: Email enviado com sucesso
 *       500:
 *         description: Erro ao enviar email
 */


/**
 * @swagger
 * /client/novo-acesso:
 *   post:
 *     summary: Envia um email alertando sobre um novo acesso à conta
 *     tags: [Email]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EmailRequest'
 *     responses:
 *       200:
 *         description: Email enviado com sucesso
 *       500:
 *         description: Erro ao enviar email
 */


module.exports = router;
