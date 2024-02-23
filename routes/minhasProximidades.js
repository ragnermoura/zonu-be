const express = require("express");
const router = express.Router();

const minhasProximidadesController = require("../controllers/minhasProximidadesController");

router.get("/", minhasProximidadesController.obterMinhasProximidades);
router.get("/:id_minhas_proximidades", minhasProximidadesController.obterMinhaProximidadePorId);
router.post("/cadastro", minhasProximidadesController.criarMinhaProximidade);
router.put("/:id_minhas_proximidades", minhasProximidadesController.atualizarMinhaProximidade);
router.delete("/:id_minhas_proximidades", minhasProximidadesController.deletarMinhaProximidade);


/**
 * @swagger
 * tags:
 *   name: MinhasProximidades
 *   description: Gerenciamento das proximidades personalizadas dos imóveis
 */

/**
 * @swagger
 * /minhasProximidades:
 *   get:
 *     summary: Lista todas as minhas proximidades
 *     tags: [MinhasProximidades]
 *     responses:
 *       200:
 *         description: Lista de minhas proximidades retornada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/MinhasProximidades'
 *   post:
 *     summary: Cria uma nova minha proximidade
 *     tags: [MinhasProximidades]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MinhasProximidades'
 *     responses:
 *       201:
 *         description: Minha proximidade criada com sucesso.
 *       500:
 *         description: Erro ao criar minha proximidade.
 */

/**
 * @swagger
 * /minhasProximidades/{id_minhas_proximidades}:
 *   get:
 *     summary: Obtém uma minha proximidade pelo ID
 *     tags: [MinhasProximidades]
 *     parameters:
 *       - in: path
 *         name: id_minhas_proximidades
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da minha proximidade
 *     responses:
 *       200:
 *         description: Minha proximidade encontrada.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MinhasProximidades'
 *       404:
 *         description: Minha proximidade não encontrada.
 *   put:
 *     summary: Atualiza uma minha proximidade pelo ID
 *     tags: [MinhasProximidades]
 *     parameters:
 *       - in: path
 *         name: id_minhas_proximidades
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da minha proximidade
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MinhasProximidades'
 *     responses:
 *       200:
 *         description: Minha proximidade atualizada com sucesso.
 *       404:
 *         description: Minha proximidade não encontrada.
 *   delete:
 *     summary: Deleta uma minha proximidade pelo ID
 *     tags: [MinhasProximidades]
 *     parameters:
 *       - in: path
 *         name: id_minhas_proximidades
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da minha proximidade
 *     responses:
 *       200:
 *         description: Minha proximidade deletada com sucesso.
 *       404:
 *         description: Minha proximidade não encontrada.
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     MinhasProximidades:
 *       type: object
 *       properties:
 *         id_minhas_proximidades:
 *           type: integer
 *           description: ID da minha proximidade.
 *         id_proximidade:
 *           type: integer
 *           description: ID da proximidade vinculada.
 *       required:
 *         - id_proximidade
 *       example:
 *         id_minhas_proximidades: 1
 *         id_proximidade: 2
 */



module.exports = router;
