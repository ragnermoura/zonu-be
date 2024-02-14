const express = require("express");
const router = express.Router();
const planosController = require("../controllers/planoController");


router.get("/", planosController.buscarTodosPlanos);
router.post("/cadastrar", planosController.criarPlano);
router.get("/buscar/:id_plano", planosController.buscarPlanoPorId);
router.put("/edit/:id_plano", planosController.atualizarPlano);
router.delete("/delete/:id_plano", planosController.deletarPlano);


/**
 * @swagger
 * components:
 *   schemas:
 *     Plano:
 *       type: object
 *       required:
 *         - nome_plano
 *         - valor_plano
 *         - descricao
 *       properties:
 *         id_plano:
 *           type: integer
 *           description: ID do plano
 *         nome_plano:
 *           type: string
 *           description: Nome do plano
 *         valor_plano:
 *           type: number
 *           format: float
 *           description: Valor do plano
 *         descricao:
 *           type: string
 *           description: Descrição do plano
 *   parameters:
 *     idPlano:
 *       in: path
 *       name: id_plano
 *       required: true
 *       schema:
 *         type: integer
 *       description: ID único do plano
 */

/**
 * @swagger
 * /planos:
 *   get:
 *     summary: Lista todos os planos
 *     tags: [Planos]
 *     responses:
 *       200:
 *         description: Lista de planos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Plano'
 *       500:
 *         description: Erro no servidor
 */

/**
 * @swagger
 * /planos/cadastrar:
 *   post:
 *     summary: Cadastra um novo plano
 *     tags: [Planos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Plano'
 *     responses:
 *       201:
 *         description: Plano cadastrado com sucesso
 *       500:
 *         description: Erro no servidor
 */

/**
 * @swagger
 * /planos/buscar/{id_plano}:
 *   get:
 *     summary: Busca um plano por ID
 *     tags: [Planos]
 *     parameters:
 *       - $ref: '#/components/parameters/idPlano'
 *     responses:
 *       200:
 *         description: Detalhes do plano
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Plano'
 *       404:
 *         description: Plano não encontrado
 *       500:
 *         description: Erro no servidor
 */

/**
 * @swagger
 * /planos/edit/{id_plano}:
 *   put:
 *     summary: Atualiza um plano existente
 *     tags: [Planos]
 *     parameters:
 *       - $ref: '#/components/parameters/idPlano'
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Plano'
 *     responses:
 *       200:
 *         description: Plano atualizado com sucesso
 *       404:
 *         description: Plano não encontrado
 *       500:
 *         description: Erro no servidor
 */

/**
 * @swagger
 * /planos/delete/{id_plano}:
 *   delete:
 *     summary: Deleta um plano existente
 *     tags: [Planos]
 *     parameters:
 *       - $ref: '#/components/parameters/idPlano'
 *     responses:
 *       200:
 *         description: Plano deletado com sucesso
 *       404:
 *         description: Plano não encontrado
 *       500:
 *         description: Erro no servidor
 */


module.exports = router;
