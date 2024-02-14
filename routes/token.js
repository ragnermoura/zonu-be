const express = require("express");
const router = express.Router();
const tokensController = require("../controllers/tokenController");

// Rota para criar um novo token
router.post("/cadastrar", tokensController.criarToken);
router.get("/buscar", tokensController.buscarTodosTokens);
router.get("/buscar/:id_token", tokensController.buscarTokenPorId);
router.put("/edit/:id_token", tokensController.atualizarToken);
router.delete("/delete/:id_token", tokensController.deletarToken);

/**
 * @swagger
 * components:
 *   schemas:
 *     Token:
 *       type: object
 *       required:
 *         - token
 *       properties:
 *         id_token:
 *           type: integer
 *           description: ID único do token
 *         token:
 *           type: string
 *           description: Valor do token
 *   parameters:
 *     idToken:
 *       in: path
 *       name: id_token
 *       required: true
 *       schema:
 *         type: integer
 *       description: ID único do token
 */

/**
 * @swagger
 * /tokens/cadastrar:
 *   post:
 *     summary: Cadastra um novo token
 *     tags: [Tokens]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Token'
 *     responses:
 *       201:
 *         description: Novo token criado
 *       500:
 *         description: Erro no servidor
 */

/**
 * @swagger
 * /tokens/buscar:
 *   get:
 *     summary: Lista todos os tokens
 *     tags: [Tokens]
 *     responses:
 *       200:
 *         description: Lista de tokens
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Token'
 *       500:
 *         description: Erro no servidor
 */

/**
 * @swagger
 * /tokens/buscar/{id_token}:
 *   get:
 *     summary: Busca um token por ID
 *     tags: [Tokens]
 *     parameters:
 *       - $ref: '#/components/parameters/idToken'
 *     responses:
 *       200:
 *         description: Detalhes do token
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Token'
 *       404:
 *         description: Token não encontrado
 *       500:
 *         description: Erro no servidor
 */

/**
 * @swagger
 * /tokens/edit/{id_token}:
 *   put:
 *     summary: Atualiza um token existente
 *     tags: [Tokens]
 *     parameters:
 *       - $ref: '#/components/parameters/idToken'
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Token'
 *     responses:
 *       200:
 *         description: Token atualizado com sucesso
 *       404:
 *         description: Token não encontrado
 *       500:
 *         description: Erro no servidor
 */

/**
 * @swagger
 * /tokens/delete/{id_token}:
 *   delete:
 *     summary: Deleta um token existente
 *     tags: [Tokens]
 *     parameters:
 *       - $ref: '#/components/parameters/idToken'
 *     responses:
 *       200:
 *         description: Token deletado com sucesso
 *       404:
 *         description: Token não encontrado
 *       500:
 *         description: Erro no servidor
 */


module.exports = router;
