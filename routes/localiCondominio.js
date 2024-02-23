const express = require("express");
const router = express.Router();

const localizacaoCondominioController = require("../controllers/localCondController");

router.get("/", localizacaoCondominioController.obterLocalizacoesCondominio);
router.get("/:id_localizacao_condominio", localizacaoCondominioController.obterLocalizacaoCondominioPorId);
router.post("/cadastro", localizacaoCondominioController.criarLocalizacaoCondominio);
router.put("/:id_localizacao_condominio", localizacaoCondominioController.atualizarLocalizacaoCondominio);
router.delete("/:id_localizacao_condominio", localizacaoCondominioController.deletarLocalizacaoCondominio);


/**
 * @swagger
 * tags:
 *   name: LocalizacaoCondominio
 *   description: Gerenciamento das localizações do condomínio
 */

/**
 * @swagger
 * /localizacoes-condominio:
 *   get:
 *     summary: Lista todas as localizações do condomínio
 *     tags: [LocalizacaoCondominio]
 *     responses:
 *       200:
 *         description: Lista de localizações do condomínio retornada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/LocalizacaoCondominio'
 *   post:
 *     summary: Cria uma nova localização do condomínio
 *     tags: [LocalizacaoCondominio]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LocalizacaoCondominioInput'
 *     responses:
 *       201:
 *         description: Localização do condomínio criada com sucesso.
 *       500:
 *         description: Erro ao criar a localização do condomínio.
 */

/**
 * @swagger
 * /localizacoes-condominio/{id_localizacao_condominio}:
 *   get:
 *     summary: Obtém uma localização do condomínio pelo ID
 *     tags: [LocalizacaoCondominio]
 *     parameters:
 *       - in: path
 *         name: id_localizacao_condominio
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da localização do condomínio
 *     responses:
 *       200:
 *         description: Localização do condomínio encontrada.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LocalizacaoCondominio'
 *       404:
 *         description: Localização do condomínio não encontrada.
 *   put:
 *     summary: Atualiza uma localização do condomínio pelo ID
 *     tags: [LocalizacaoCondominio]
 *     parameters:
 *       - in: path
 *         name: id_localizacao_condominio
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da localização do condomínio
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LocalizacaoCondominioInput'
 *     responses:
 *       200:
 *         description: Localização do condomínio atualizada com sucesso.
 *       404:
 *         description: Localização do condomínio não encontrada.
 *   delete:
 *     summary: Deleta uma localização do condomínio pelo ID
 *     tags: [LocalizacaoCondominio]
 *     parameters:
 *       - in: path
 *         name: id_localizacao_condominio
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da localização do condomínio
 *     responses:
 *       200:
 *         description: Localização do condomínio deletada com sucesso.
 *       404:
 *         description: Localização do condomínio não encontrada.
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     LocalizacaoCondominioInput:
 *       type: object
 *       properties:
 *         cep:
 *           type: string
 *           description: CEP da localização do condomínio.
 *         pais:
 *           type: string
 *           description: País da localização do condomínio.
 *         estado:
 *           type: string
 *           description: Estado da localização do condomínio.
 *         cidade:
 *           type: string
 *           description: Cidade da localização do condomínio.
 *         bairro:
 *           type: string
 *           description: Bairro da localização do condomínio.
 *         zona:
 *           type: string
 *           description: Zona da localização do condomínio.
 *         logradouro:
 *           type: string
 *           description: Logradouro da localização do condomínio.
 *         numero:
 *           type: string
 *           description: Número da localização do condomínio.
 *       example:
 *         cep: "12345-678"
 *         pais: "Brasil"
 *         estado: "São Paulo"
 *         cidade: "São Paulo"
 *         bairro: "Vila Olímpia"
 *         zona: "Oeste"
 *         logradouro: "Rua das Flores"
 *         numero: "123"
 *     LocalizacaoCondominio:
 *       type: object
 *       properties:
 *         id_localizacao_condominio:
 *           type: integer
 *           description: ID da localização do condomínio.
 *         cep:
 *           type: string
 *           description: CEP da localização do condomínio.
 *         pais:
 *           type: string
 *           description: País da localização do condomínio.
 *         estado:
 *           type: string
 *           description: Estado da localização do condomínio.
 *         cidade:
 *           type: string
 *           description: Cidade da localização do condomínio.
 *         bairro:
 *           type: string
 *           description: Bairro da localização do condomínio.
 *         zona:
 *           type: string
 *           description: Zona da localização do condomínio.
 *         logradouro:
 *           type: string
 *           description: Logradouro da localização do condomínio.
 *         numero:
 *           type: string
 *           description: Número da localização do condomínio.
 *         id_user:
 *           type: integer
 *           description: ID do usuário associado à localização do condomínio.
 *       example:
 *         id_localizacao_condominio: 1
 *         cep: "12345-678"
 *         pais: "Brasil"
 *         estado: "São Paulo"
 *         cidade: "São Paulo"
 *         bairro: "Vila Olímpia"
 *         zona: "Oeste"
 *         logradouro: "Rua das Flores"
 *         numero: "123"
 *         id_user: 1
 */



module.exports = router;
