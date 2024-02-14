require("dotenv").config();
const express = require("express");
const router = express.Router();
const authController = require("../controllers/loginController");

router.post("/", authController.autenticarUsuario);

/**
 * @swagger
 * components:
 *   schemas:
 *     Autenticacao:
 *       type: object
 *       required:
 *         - email
 *         - senha
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           description: O e-mail do usuário para login
 *         senha:
 *           type: string
 *           description: A senha do usuário para login
 *     AutenticacaoResposta:
 *       type: object
 *       properties:
 *         mensagem:
 *           type: string
 *           description: Mensagem indicando que a autenticação foi bem-sucedida
 *         token:
 *           type: string
 *           description: Token JWT gerado para o usuário autenticado
 *         id_status:
 *           type: integer
 *           description: O status do ID do usuário autenticado
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Autentica um usuário e retorna um token JWT
 *     tags: [Autenticação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Autenticacao'
 *     responses:
 *       200:
 *         description: Autenticação bem-sucedida
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AutenticacaoResposta'
 *       401:
 *         description: Falha na autenticação
 *       500:
 *         description: Erro no servidor
 */


module.exports = router;