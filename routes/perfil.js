const express = require("express");
const router = express.Router();
const perfilController = require("../controllers/perfilController");

router.get("/", perfilController.obterPerfil);
router.get("/:id_perfil", perfilController.obterPerfilPorId);
router.patch("/edit", perfilController.atualizarPerfil);
router.delete("/delete", perfilController.excluirPerfil);
router.post("/cadastro", perfilController.cadastrarPerfil);


/**
 * @swagger
 * components:
 *   schemas:
 *     Perfil:
 *       type: object
 *       properties:
 *         id_perfil:
 *           type: integer
 *           description: ID único do perfil
 *         razao_social:
 *           type: string
 *           description: Razão social do perfil
 *         cnpj:
 *           type: string
 *           description: CNPJ do perfil
 *         cpf:
 *           type: string
 *           description: CPF do perfil
 *         telefone:
 *           type: string
 *           description: Telefone de contato
 *         cep:
 *           type: string
 *           description: CEP do endereço
 *         endereco:
 *           type: string
 *           description: Endereço do perfil
 *         id_user:
 *           type: integer
 *           description: ID do usuário associado ao perfil
 *   parameters:
 *     idPerfil:
 *       in: path
 *       name: id_perfil
 *       required: true
 *       schema:
 *         type: integer
 *       description: ID único do perfil
 */

/**
 * @swagger
 * /perfil:
 *   get:
 *     summary: Lista todos os perfis
 *     tags: [Perfil]
 *     responses:
 *       200:
 *         description: Lista de perfis
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Perfil'
 *       500:
 *         description: Erro no servidor
 */

/**
 * @swagger
 * /perfil/{id_perfil}:
 *   get:
 *     summary: Obtém um perfil pelo ID
 *     tags: [Perfil]
 *     parameters:
 *       - $ref: '#/components/parameters/idPerfil'
 *     responses:
 *       200:
 *         description: Detalhes do perfil
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Perfil'
 *       404:
 *         description: Perfil não encontrado
 *       500:
 *         description: Erro no servidor
 */

/**
 * @swagger
 * /perfil/edit:
 *   patch:
 *     summary: Atualiza um perfil
 *     tags: [Perfil]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Perfil'
 *     responses:
 *       201:
 *         description: Perfil atualizado com sucesso
 *       404:
 *         description: Perfil não encontrado
 *       500:
 *         description: Erro no servidor
 */

/**
 * @swagger
 * /perfil/delete:
 *   delete:
 *     summary: Exclui um perfil
 *     tags: [Perfil]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_perfil:
 *                 type: integer
 *                 description: ID do perfil a ser excluído
 *     responses:
 *       202:
 *         description: Perfil excluído com sucesso
 *       404:
 *         description: Perfil não encontrado
 *       500:
 *         description: Erro no servidor
 */

/**
 * @swagger
 * /perfil/cadastro:
 *   post:
 *     summary: Cadastra um novo perfil
 *     tags: [Perfil]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Perfil'
 *     responses:
 *       202:
 *         description: Perfil cadastrado com sucesso
 *       409:
 *         description: CNPJ já cadastrado
 *       500:
 *         description: Erro no servidor
 */


module.exports = router;