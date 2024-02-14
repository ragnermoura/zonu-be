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
 * components:
 *   schemas:
 *     Nivel:
 *       type: object
 *       properties:
 *         id_nivel:
 *           type: integer
 *           description: ID do nível
 *         nome:
 *           type: string
 *           description: Nome do nível
 *         descricao:
 *           type: string
 *           description: Descrição do nível
 *   parameters:
 *     idNivel:
 *       in: path
 *       name: id_nivel
 *       required: true
 *       schema:
 *         type: integer
 *       description: ID do nível
 */

/**
 * @swagger
 * /niveis:
 *   get:
 *     summary: Lista todos os níveis
 *     tags: [Níveis]
 *     responses:
 *       200:
 *         description: Uma lista de níveis
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Nivel'
 *       500:
 *         description: Erro no servidor
 */

/**
 * @swagger
 * /niveis/{id_nivel}:
 *   get:
 *     summary: Obtém um nível pelo ID
 *     tags: [Níveis]
 *     parameters:
 *       - $ref: '#/components/parameters/idNivel'
 *     responses:
 *       200:
 *         description: Detalhes do nível
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Nivel'
 *       404:
 *         description: Nível não encontrado
 *       500:
 *         description: Erro no servidor
 */

/**
 * @swagger
 * /niveis/cadastro:
 *   post:
 *     summary: Cria um novo nível
 *     tags: [Níveis]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Nivel'
 *     responses:
 *       201:
 *         description: Novo nível criado
 *       500:
 *         description: Erro no servidor
 */

/**
 * @swagger
 * /niveis/{id_nivel}:
 *   put:
 *     summary: Atualiza um nível pelo ID
 *     tags: [Níveis]
 *     parameters:
 *       - $ref: '#/components/parameters/idNivel'
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Nivel'
 *     responses:
 *       200:
 *         description: Nível atualizado com sucesso
 *       404:
 *         description: Nível não encontrado
 *       500:
 *         description: Erro no servidor
 */

/**
 * @swagger
 * /niveis/{id_nivel}:
 *   delete:
 *     summary: Deleta um nível pelo ID
 *     tags: [Níveis]
 *     parameters:
 *       - $ref: '#/components/parameters/idNivel'
 *     responses:
 *       200:
 *         description: Nível deletado com sucesso
 *       404:
 *         description: Nível não encontrado
 *       500:
 *         description: Erro no servidor
 */


module.exports = router;
