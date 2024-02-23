const express = require("express");
const router = express.Router();

const caracteristicasCondominioController = require("../controllers/caractCondController");

router.get("/", caracteristicasCondominioController.obterCaracteristicasCondominio);
router.get("/:id_caracteristica_condominio", caracteristicasCondominioController.obterCaracteristicaCondominioPorId);
router.post("/cadastro", caracteristicasCondominioController.criarCaracteristicaCondominio);
router.put("/:id_caracteristica_condominio", caracteristicasCondominioController.atualizarCaracteristicaCondominio);
router.delete("/:id_caracteristica_condominio", caracteristicasCondominioController.deletarCaracteristicaCondominio);


/**
 * @swagger
 * tags:
 *   name: CaracteristicaCondominio
 *   description: Gerenciamento das características do condomínio
 */

/**
 * @swagger
 * /caracteristicas-condominio:
 *   get:
 *     summary: Obtém todas as características do condomínio
 *     tags: [CaracteristicaCondominio]
 *     responses:
 *       200:
 *         description: Características do condomínio obtidas com sucesso.
 *       500:
 *         description: Erro ao obter as características do condomínio.
 *   post:
 *     summary: Cria uma nova característica do condomínio
 *     tags: [CaracteristicaCondominio]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CaracteristicaCondominioInput'
 *     responses:
 *       201:
 *         description: Característica do condomínio criada com sucesso.
 *       500:
 *         description: Erro ao criar a característica do condomínio.
 */

/**
 * @swagger
 * /caracteristicas-condominio/{id_caracteristica_condominio}:
 *   get:
 *     summary: Obtém uma característica do condomínio pelo ID
 *     tags: [CaracteristicaCondominio]
 *     parameters:
 *       - in: path
 *         name: id_caracteristica_condominio
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da característica do condomínio
 *     responses:
 *       200:
 *         description: Característica do condomínio obtida com sucesso.
 *       404:
 *         description: Característica do condomínio não encontrada.
 *       500:
 *         description: Erro ao obter a característica do condomínio.
 *   put:
 *     summary: Atualiza uma característica do condomínio pelo ID
 *     tags: [CaracteristicaCondominio]
 *     parameters:
 *       - in: path
 *         name: id_caracteristica_condominio
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da característica do condomínio
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CaracteristicaCondominioInput'
 *     responses:
 *       200:
 *         description: Característica do condomínio atualizada com sucesso.
 *       404:
 *         description: Característica do condomínio não encontrada.
 *       500:
 *         description: Erro ao atualizar a característica do condomínio.
 *   delete:
 *     summary: Deleta uma característica do condomínio pelo ID
 *     tags: [CaracteristicaCondominio]
 *     parameters:
 *       - in: path
 *         name: id_caracteristica_condominio
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da característica do condomínio
 *     responses:
 *       200:
 *         description: Característica do condomínio deletada com sucesso.
 *       404:
 *         description: Característica do condomínio não encontrada.
 *       500:
 *         description: Erro ao deletar a característica do condomínio.
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     CaracteristicaCondominioInput:
 *       type: object
 *       properties:
 *         nome_caracteristica_condominio:
 *           type: string
 *           description: Nome da característica do condomínio.
 *         id_user:
 *           type: integer
 *           description: ID do usuário associado à característica do condomínio.
 *       example:
 *         nome_caracteristica_condominio: "Piscina"
 *         id_user: 1
 */



module.exports = router;
