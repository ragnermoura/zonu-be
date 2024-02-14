const express = require("express");
const router = express.Router();
const acessosController = require("../controllers/accessController");

router.post("/novo", acessosController.novoAcesso);


/**
 * @swagger
 * components:
 *   schemas:
 *     NovoAcesso:
 *       type: object
 *       required:
 *         - latitude
 *         - longitude
 *         - regiao
 *         - plataforma
 *         - navegador
 *         - enderecoIp
 *         - id_user
 *       properties:
 *         latitude:
 *           type: string
 *           description: Latitude do acesso
 *         longitude:
 *           type: string
 *           description: Longitude do acesso
 *         regiao:
 *           type: string
 *           description: Região do acesso
 *         plataforma:
 *           type: string
 *           description: Plataforma utilizada no acesso
 *         navegador:
 *           type: string
 *           description: Navegador utilizado no acesso
 *         enderecoIp:
 *           type: string
 *           description: Endereço IP do acesso
 *         id_user:
 *           type: integer
 *           description: ID do usuário que fez o acesso
 *     RespostaAcesso:
 *       type: object
 *       properties:
 *         mensagem:
 *           type: string
 *           description: Mensagem de retorno após criar um novo acesso
 *         acesso:
 *           $ref: '#/components/schemas/NovoAcesso'
 *       examples:
 *         application/json:
 *           value:
 *             mensagem: "Acesso registrado com sucesso!"
 *             acesso: { latitude: "xxx", longitude: "xxx", regiao: "xxx", plataforma: "xxx", navegador: "xxx", enderecoIp: "xxx", id_user: 1 }
 */

/**
 * @swagger
 * /novo:
 *   post:
 *     summary: Cria um novo acesso
 *     tags: [Acessos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NovoAcesso'
 *     responses:
 *       201:
 *         description: Acesso registrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RespostaAcesso'
 *       400:
 *         description: Dados incompletos
 *       409:
 *         description: Um acesso com essa plataforma ou endereço IP já existe
 *       500:
 *         description: Erro ao registrar o acesso
 */


module.exports = router;
