const express = require("express");
const router = express.Router();

const infoCondominioController = require("../controllers/infoCondController");

router.get("/", infoCondominioController.obterInfoCondominios);
router.get("/:id_info_condominio", infoCondominioController.obterInfoCondominioPorId);
router.post("/cadastro", infoCondominioController.criarInfoCondominio);
router.put("/:id_info_condominio", infoCondominioController.atualizarInfoCondominio);
router.delete("/:id_info_condominio", infoCondominioController.deletarInfoCondominio);


/**
 * @swagger
 * tags:
 *   name: InfoCondominio
 *   description: Gerenciamento das informações do condomínio
 */

/**
 * @swagger
 * /info-condominios:
 *   get:
 *     summary: Lista todas as informações do condomínio
 *     tags: [InfoCondominio]
 *     responses:
 *       200:
 *         description: Lista de informações do condomínio retornada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/InfoCondominio'
 *   post:
 *     summary: Cria novas informações do condomínio
 *     tags: [InfoCondominio]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/InfoCondominioInput'
 *     responses:
 *       201:
 *         description: Informações do condomínio criadas com sucesso.
 *       500:
 *         description: Erro ao criar as informações do condomínio.
 */

/**
 * @swagger
 * /info-condominios/{id_info_condominio}:
 *   get:
 *     summary: Obtém as informações do condomínio pelo ID
 *     tags: [InfoCondominio]
 *     parameters:
 *       - in: path
 *         name: id_info_condominio
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID das informações do condomínio
 *     responses:
 *       200:
 *         description: Informações do condomínio encontradas.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/InfoCondominio'
 *       404:
 *         description: Informações do condomínio não encontradas.
 *   put:
 *     summary: Atualiza as informações do condomínio pelo ID
 *     tags: [InfoCondominio]
 *     parameters:
 *       - in: path
 *         name: id_info_condominio
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID das informações do condomínio
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/InfoCondominioInput'
 *     responses:
 *       200:
 *         description: Informações do condomínio atualizadas com sucesso.
 *       404:
 *         description: Informações do condomínio não encontradas.
 *   delete:
 *     summary: Deleta as informações do condomínio pelo ID
 *     tags: [InfoCondominio]
 *     parameters:
 *       - in: path
 *         name: id_info_condominio
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID das informações do condomínio
 *     responses:
 *       200:
 *         description: Informações do condomínio deletadas com sucesso.
 *       404:
 *         description: Informações do condomínio não encontradas.
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     InfoCondominioInput:
 *       type: object
 *       properties:
 *         nome_condominio:
 *           type: string
 *           description: Nome do condomínio.
 *         descricao:
 *           type: string
 *           description: Descrição do condomínio.
 *         id_user:
 *           type: integer
 *           description: ID do usuário associado às informações do condomínio.
 *       example:
 *         nome_condominio: "Condomínio ABC"
 *         descricao: "Um belo condomínio com áreas de lazer e segurança."
 *         id_user: 1
 *     InfoCondominio:
 *       type: object
 *       properties:
 *         id_info_condominio:
 *           type: integer
 *           description: ID das informações do condomínio.
 *         nome_condominio:
 *           type: string
 *           description: Nome do condomínio.
 *         descricao:
 *           type: string
 *           description: Descrição do condomínio.
 *         id_user:
 *           type: integer
 *           description: ID do usuário associado às informações do condomínio.
 *       example:
 *         id_info_condominio: 1
 *         nome_condominio: "Condomínio ABC"
 *         descricao: "Um belo condomínio com áreas de lazer e segurança."
 *         id_user: 1
 */



module.exports = router;
