const express = require("express");
const router = express.Router();
const userController = require("../controllers/usuariosController");


router.get("/", userController.obterUsuarios);
router.get("/:id_user", userController.obterUsuarioPorId);
router.patch("/edit", userController.atualizarUsuario);
router.patch("/dados", userController.atualizarDadosUsuario);
router.delete("/delete", userController.excluirUsuario);
router.post("/cadastro", userController.cadastrarUsuario);


/**
 * @swagger
 * components:
 *   schemas:
 *     Usuario:
 *       type: object
 *       properties:
 *         id_user:
 *           type: integer
 *           description: ID único do usuário
 *         nome:
 *           type: string
 *           description: Nome do usuário
 *         sobrenome:
 *           type: string
 *           description: Sobrenome do usuário
 *         email:
 *           type: string
 *           format: email
 *           description: Email do usuário
 *         senha:
 *           type: string
 *           format: password
 *           description: Senha do usuário
 *         id_plano:
 *           type: integer
 *           description: ID do plano associado ao usuário
 *         id_status:
 *           type: integer
 *           description: ID do status do usuário
 *         id_nivel:
 *           type: integer
 *           description: ID do nível de acesso do usuário
 *   parameters:
 *     idUser:
 *       in: path
 *       name: id_user
 *       required: true
 *       schema:
 *         type: integer
 *       description: ID único do usuário
 */

/**
 * @swagger
 * /usuarios:
 *   get:
 *     summary: Lista todos os usuários
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: Lista de usuários
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Usuario'
 *       500:
 *         description: Erro no servidor
 */

/**
 * @swagger
 * /usuarios/{id_user}:
 *   get:
 *     summary: Obtém um usuário pelo ID
 *     tags: [Usuarios]
 *     parameters:
 *       - $ref: '#/components/parameters/idUser'
 *     responses:
 *       200:
 *         description: Detalhes do usuário
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro no servidor
 */

/**
 * @swagger
 * /usuarios/edit:
 *   patch:
 *     summary: Atualiza um usuário
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuario'
 *     responses:
 *       201:
 *         description: Dados de usuário alterados com sucesso
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro no servidor
 */

/**
 * @swagger
 * /usuarios/dados:
 *   patch:
 *     summary: Atualiza dados adicionais de um usuário
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuario'
 *     responses:
 *       201:
 *         description: Dados de usuário alterados com sucesso
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro no servidor
 */

/**
 * @swagger
 * /usuarios/delete:
 *   delete:
 *     summary: Exclui um usuário
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_user:
 *                 type: integer
 *                 description: ID do usuário a ser excluído
 *     responses:
 *       202:
 *         description: Usuário excluído com sucesso
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro no servidor
 */

/**
 * @swagger
 * /usuarios/cadastro:
 *   post:
 *     summary: Cadastra um novo usuário
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuario'
 *     responses:
 *       202:
 *         description: Usuário cadastrado com sucesso
 *       409:
 *         description: Email já cadastrado
 *       500:
 *         description: Erro no servidor
 */


module.exports = router;