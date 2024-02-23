const express = require("express");
const router = express.Router();
const niveisController = require("../controllers/nivelController");


router.get("/", niveisController.obterNiveis);
router.get("/:id_nivel", niveisController.obterNivelPorId);
router.post("/cadastro", niveisController.criarNivel);
router.put("/:id_nivel", niveisController.atualizarNivel);
router.delete("/:id_nivel", niveisController.deletarNivel);


/**
 * @swagger
 * tags:
 *   name: Nivel
 *   description: Gerenciamento dos níveis de acesso
 */

/**
 * @swagger
 * /nivel:
 *   get:
 *     summary: Lista todos os níveis de acesso
 *     tags: [Nivel]
 *     responses:
 *       200:
 *         description: Lista de níveis de acesso retornada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Nivel'
 *   post:
 *     summary: Cria um novo nível de acesso
 *     tags: [Nivel]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Nivel'
 *     responses:
 *       201:
 *         description: Nível de acesso criado com sucesso.
 *       500:
 *         description: Erro ao criar o nível de acesso.
 */

/**
 * @swagger
 * /nivel/{id_nivel}:
 *   get:
 *     summary: Obtém um nível de acesso pelo ID
 *     tags: [Nivel]
 *     parameters:
 *       - in: path
 *         name: id_nivel
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do nível de acesso
 *     responses:
 *       200:
 *         description: Nível de acesso encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Nivel'
 *       404:
 *         description: Nível de acesso não encontrado.
 *   put:
 *     summary: Atualiza um nível de acesso pelo ID
 *     tags: [Nivel]
 *     parameters:
 *       - in: path
 *         name: id_nivel
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do nível de acesso
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Nivel'
 *     responses:
 *       200:
 *         description: Nível de acesso atualizado com sucesso.
 *       404:
 *         description: Nível de acesso não encontrado.
 *   delete:
 *     summary: Deleta um nível de acesso pelo ID
 *     tags: [Nivel]
 *     parameters:
 *       - in: path
 *         name: id_nivel
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do nível de acesso
 *     responses:
 *       200:
 *         description: Nível de acesso deletado com sucesso.
 *       404:
 *         description: Nível de acesso não encontrado.
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Nivel:
 *       type: object
 *       properties:
 *         id_nivel:
 *           type: integer
 *           description: ID do nível de acesso.
 *         label:
 *           type: string
 *           description: Descrição do nível de acesso.
 *       required:
 *         - label
 *       example:
 *         id_nivel: 1
 *         label: "Administrador"
 */



module.exports = router;
