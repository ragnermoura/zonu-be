const express = require("express");
const router = express.Router();

const minhasCaracteristicasController = require("../controllers/minhasCaracteristicasController");

router.get("/", minhasCaracteristicasController.obterMinhasCaracteristicas);
router.get("/:id_minhas_caracteristicas", minhasCaracteristicasController.obterMinhaCaracteristicaPorId);
router.post("/cadastro", minhasCaracteristicasController.criarMinhaCaracteristica);
router.put("/:id_minhas_caracteristicas", minhasCaracteristicasController.atualizarMinhaCaracteristica);
router.delete("/:id_minhas_caracteristicas", minhasCaracteristicasController.deletarMinhaCaracteristica);


/**
 * @swagger
 * tags:
 *   name: MinhasCaracteristicas
 *   description: Gerenciamento das características personalizadas dos imóveis
 */

/**
 * @swagger
 * /minhasCaracteristicas:
 *   get:
 *     summary: Lista todas as características personalizadas
 *     tags: [MinhasCaracteristicas]
 *     responses:
 *       200:
 *         description: Lista de características personalizadas retornada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/MinhasCaracteristicas'
 *   post:
 *     summary: Cria uma nova característica personalizada
 *     tags: [MinhasCaracteristicas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MinhasCaracteristicas'
 *     responses:
 *       201:
 *         description: Característica personalizada criada com sucesso.
 *       500:
 *         description: Erro ao criar a característica personalizada.
 */

/**
 * @swagger
 * /minhasCaracteristicas/{id_minhas_caracteristicas}:
 *   get:
 *     summary: Obtém uma característica personalizada pelo ID
 *     tags: [MinhasCaracteristicas]
 *     parameters:
 *       - in: path
 *         name: id_minhas_caracteristicas
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da característica personalizada
 *     responses:
 *       200:
 *         description: Característica personalizada encontrada.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MinhasCaracteristicas'
 *       404:
 *         description: Característica personalizada não encontrada.
 *   put:
 *     summary: Atualiza uma característica personalizada pelo ID
 *     tags: [MinhasCaracteristicas]
 *     parameters:
 *       - in: path
 *         name: id_minhas_caracteristicas
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da característica personalizada
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MinhasCaracteristicas'
 *     responses:
 *       200:
 *         description: Característica personalizada atualizada com sucesso.
 *       404:
 *         description: Característica personalizada não encontrada.
 *   delete:
 *     summary: Deleta uma característica personalizada pelo ID
 *     tags: [MinhasCaracteristicas]
 *     parameters:
 *       - in: path
 *         name: id_minhas_caracteristicas
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da característica personalizada
 *     responses:
 *       200:
 *         description: Característica personalizada deletada com sucesso.
 *       404:
 *         description: Característica personalizada não encontrada.
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     MinhasCaracteristicas:
 *       type: object
 *       properties:
 *         id_minhas_caracteristicas:
 *           type: integer
 *           description: ID da característica personalizada.
 *         id_caracteristica:
 *           type: integer
 *           description: ID da característica vinculada.
 *       required:
 *         - id_caracteristica
 *       example:
 *         id_minhas_caracteristicas: 1
 *         id_caracteristica: 2
 */



module.exports = router;
