const express = require("express");
const router = express.Router();
const condominioController = require("../controllers/imagemCondominioController");
const { imageUpload } = require("../helpers/file-uploader");

router.post("/cadastro", imageUpload.array('condominio'), condominioController.uploadImages);
router.get("/:id_user", condominioController.getImagesBycondominioId);
router.patch("/editar/:id_imagem", imageUpload.single('condominio'), condominioController.editImage);
router.delete("/deletar/:id_imagem", condominioController.deleteImage);


/**
 * @swagger
 * tags:
 *   name: ImagemCondominio
 *   description: Gerenciamento das imagens do condomínio
 */

/**
 * @swagger
 * /imagens-condominio:
 *   post:
 *     summary: Faz upload de imagens para um condomínio
 *     tags: [ImagemCondominio]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               id_condominio:
 *                 type: integer
 *                 description: ID do condomínio
 *               id_user:
 *                 type: integer
 *                 description: ID do usuário
 *               status:
 *                 type: string
 *                 description: Status da imagem
 *               files:
 *                 type: string
 *                 format: binary
 *                 description: Arquivos de imagem
 *     responses:
 *       201:
 *         description: Imagens cadastradas com sucesso.
 *       500:
 *         description: Erro ao cadastrar as imagens.
 */

/**
 * @swagger
 * /imagens-condominio/{id_condominio}:
 *   get:
 *     summary: Obtém as imagens de um condomínio pelo ID do condomínio
 *     tags: [ImagemCondominio]
 *     parameters:
 *       - in: path
 *         name: id_condominio
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do condomínio
 *     responses:
 *       200:
 *         description: Imagens encontradas para o condomínio.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ImagemCondominio'
 *       404:
 *         description: Nenhuma imagem encontrada para este condomínio.
 */

/**
 * @swagger
 * /imagens-condominio/editar/{id_imagem}:
 *   put:
 *     summary: Edita uma imagem do condomínio pelo ID da imagem
 *     tags: [ImagemCondominio]
 *     parameters:
 *       - in: path
 *         name: id_imagem
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da imagem do condomínio
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ImagemCondominioInput'
 *     responses:
 *       200:
 *         description: Imagem do condomínio atualizada com sucesso.
 *       404:
 *         description: Imagem do condomínio não encontrada.
 *   delete:
 *     summary: Deleta uma imagem do condomínio pelo ID da imagem
 *     tags: [ImagemCondominio]
 *     parameters:
 *       - in: path
 *         name: id_imagem
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da imagem do condomínio
 *     responses:
 *       200:
 *         description: Imagem do condomínio deletada com sucesso.
 *       404:
 *         description: Imagem do condomínio não encontrada.
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     ImagemCondominioInput:
 *       type: object
 *       properties:
 *         condominio:
 *           type: string
 *           description: Caminho da imagem do condomínio.
 *         status:
 *           type: string
 *           description: Status da imagem.
 *         id_condominio:
 *           type: integer
 *           description: ID do condomínio associado à imagem.
 *         id_user:
 *           type: integer
 *           description: ID do usuário associado à imagem.
 *       example:
 *         condominio: "/condominio/imagem.jpg"
 *         status: "ativo"
 *         id_condominio: 1
 *         id_user: 1
 *     ImagemCondominio:
 *       type: object
 *       properties:
 *         condominio:
 *           type: string
 *           description: Caminho da imagem do condomínio.
 *         status:
 *           type: string
 *           description: Status da imagem.
 *         id_imagem_condominio:
 *           type: integer
 *           description: ID da imagem do condomínio.
 *         id_condominio:
 *           type: integer
 *           description: ID do condomínio associado à imagem.
 *         id_user:
 *           type: integer
 *           description: ID do usuário associado à imagem.
 *       example:
 *         condominio: "/condominio/imagem.jpg"
 *         status: "ativo"
 *         id_imagem_condominio: 1
 *         id_condominio: 1
 *         id_user: 1
 */



module.exports = router;
