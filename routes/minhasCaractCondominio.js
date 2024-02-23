const express = require("express");
const router = express.Router();

const minhasCaracteristicasCondominioController = require("../controllers/minhasCaractCondController");

router.get("/", minhasCaracteristicasCondominioController.obterMinhasCaracteristicasCondominio);
router.get("/:id_minhas_caracteristicas_condominio", minhasCaracteristicasCondominioController.obterMinhaCaracteristicaCondominioPorId);
router.post("/cadastro", minhasCaracteristicasCondominioController.criarMinhaCaracteristicaCondominio);
router.put("/:id_minhas_caracteristicas_condominio", minhasCaracteristicasCondominioController.atualizarMinhaCaracteristicaCondominio);
router.delete("/:id_minhas_caracteristicas_condominio", minhasCaracteristicasCondominioController.deletarMinhaCaracteristicaCondominio);


/**
 * @swagger
 * tags:
 *   name: MinhasCaracteristicasCondominio
 *   description: Gerenciamento das características do condomínio
 */

/**
 * @swagger
 * /minhas-caracteristicas-condominio:
 *   get:
 *     summary: Lista todas as características do condomínio
 *     tags: [MinhasCaracteristicasCondominio]
 *     responses:
 *       200:
 *         description: Lista de características do condomínio retornada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/MinhasCaracteristicasCondominio'
 *   post:
 *     summary: Cria uma nova característica do condomínio
 *     tags: [MinhasCaracteristicasCondominio]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MinhasCaracteristicasCondominioInput'
 *     responses:
 *       201:
 *         description: Característica do condomínio criada com sucesso.
 *       500:
 *         description: Erro ao criar a característica do condomínio.
 */

/**
 * @swagger
 * /minhas-caracteristicas-condominio/{id_minhas_caracteristicas_condominio}:
 *   get:
 *     summary: Obtém uma característica do condomínio pelo ID
 *     tags: [MinhasCaracteristicasCondominio]
 *     parameters:
 *       - in: path
 *         name: id_minhas_caracteristicas_condominio
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da característica do condomínio
 *     responses:
 *       200:
 *         description: Característica do condomínio encontrada.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MinhasCaracteristicasCondominio'
 *       404:
 *         description: Característica do condomínio não encontrada.
 *   put:
 *     summary: Atualiza uma característica do condomínio pelo ID
 *     tags: [MinhasCaracteristicasCondominio]
 *     parameters:
 *       - in: path
 *         name: id_minhas_caracteristicas_condominio
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da característica do condomínio
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MinhasCaracteristicasCondominioInput'
 *     responses:
 *       200:
 *         description: Característica do condomínio atualizada com sucesso.
 *       404:
 *         description: Característica do condomínio não encontrada.
 *   delete:
 *     summary: Deleta uma característica do condomínio pelo ID
 *     tags: [MinhasCaracteristicasCondominio]
 *     parameters:
 *       - in: path
 *         name: id_minhas_caracteristicas_condominio
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da característica do condomínio
 *     responses:
 *       200:
 *         description: Característica do condomínio deletada com sucesso.
 *       404:
 *         description: Característica do condomínio não encontrada.
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     MinhasCaracteristicasCondominioInput:
 *       type: object
 *       properties:
 *         id_caracteristica_condominio:
 *           type: integer
 *           description: ID da característica do condomínio associada.
 *       example:
 *         id_caracteristica_condominio: 1
 *     MinhasCaracteristicasCondominio:
 *       type: object
 *       properties:
 *         id_minhas_caracteristicas_condominio:
 *           type: integer
 *           description: ID da característica do condomínio.
 *         id_caracteristica_condominio:
 *           type: integer
 *           description: ID da característica do condomínio associada.
 *       example:
 *         id_minhas_caracteristicas_condominio: 1
 *         id_caracteristica_condominio: 1
 */



module.exports = router;
