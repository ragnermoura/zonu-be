const express = require("express");
const router = express.Router();
const statusController = require("../controllers/statusController");


router.post("/cadastrar", statusController.criarStatus);
router.get("/", statusController.obterStatus);
router.get("/:id_status", statusController.obterStatusPorId);
router.put("/:id_status", statusController.atualizarStatus);
router.delete("/:id_status", statusController.deletarStatus);

/**
 * @swagger
 * components:
 *   schemas:
 *     Status:
 *       type: object
 *       properties:
 *         id_status:
 *           type: integer
 *           description: ID único do status
 *         nome:
 *           type: string
 *           description: Nome do status
 *         descricao:
 *           type: string
 *           description: Descrição do status
 *   parameters:
 *     idStatus:
 *       in: path
 *       name: id_status
 *       required: true
 *       schema:
 *         type: integer
 *       description: ID único do status
 */

/**
 * @swagger
 * /status/cadastrar:
 *   post:
 *     summary: Cadastra um novo status
 *     tags: [Status]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Status'
 *     responses:
 *       201:
 *         description: Novo status criado
 *       500:
 *         description: Erro no servidor
 */

/**
 * @swagger
 * /status:
 *   get:
 *     summary: Lista todos os status
 *     tags: [Status]
 *     responses:
 *       200:
 *         description: Lista de status
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Status'
 *       500:
 *         description: Erro no servidor
 */

/**
 * @swagger
 * /status/{id_status}:
 *   get:
 *     summary: Obtém um status pelo ID
 *     tags: [Status]
 *     parameters:
 *       - $ref: '#/components/parameters/idStatus'
 *     responses:
 *       200:
 *         description: Detalhes do status
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Status'
 *       404:
 *         description: Status não encontrado
 *       500:
 *         description: Erro no servidor
 */

/**
 * @swagger
 * /status/edit/{id_status}:
 *   put:
 *     summary: Atualiza um status existente
 *     tags: [Status]
 *     parameters:
 *       - $ref: '#/components/parameters/idStatus'
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Status'
 *     responses:
 *       200:
 *         description: Status atualizado com sucesso
 *       404:
 *         description: Status não encontrado
 *       500:
 *         description: Erro no servidor
 */

/**
 * @swagger
 * /status/delete/{id_status}:
 *   delete:
 *     summary: Deleta um status existente
 *     tags: [Status]
 *     parameters:
 *       - $ref: '#/components/parameters/idStatus'
 *     responses:
 *       200:
 *         description: Status deletado com sucesso
 *       404:
 *         description: Status não encontrado
 *       500:
 *         description: Erro no servidor
 */


module.exports = router;
