const express = require("express");
const router = express.Router();
const imovelController = require("../controllers/imagemImovelController");
const { imageUpload } = require("../helpers/file-uploader");

router.post("/cadastro", imageUpload.array('imovel'), imovelController.uploadImages);
router.get("/:id_user", imovelController.getImagesByImovelId);
router.patch("/editar/:id_imagem", imageUpload.single('imovel'), imovelController.editImage);
router.delete("/deletar/:id_imagem", imovelController.deleteImage);


/**
 * @swagger
 * tags:
 *   name: ImagemImovel
 *   description: Gerenciamento de imagens dos imóveis
 */

/**
 * @swagger
 * /imagemImovel/upload:
 *   post:
 *     summary: Faz o upload de imagens para um imóvel
 *     tags: [ImagemImovel]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               id_novo_imovel:
 *                 type: integer
 *                 description: ID do imóvel ao qual as imagens pertencem.
 *               id_user:
 *                 type: integer
 *                 description: ID do usuário que está fazendo o upload das imagens.
 *               status:
 *                 type: string
 *                 description: Status da imagem.
 *               files:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *     responses:
 *       201:
 *         description: Imagens cadastradas com sucesso.
 *       500:
 *         description: Erro ao fazer upload das imagens.
 */

/**
 * @swagger
 * /imagemImovel/{id_novo_imovel}:
 *   get:
 *     summary: Obtém as imagens de um imóvel pelo ID do imóvel
 *     tags: [ImagemImovel]
 *     parameters:
 *       - in: path
 *         name: id_novo_imovel
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do imóvel cujas imagens serão recuperadas
 *     responses:
 *       200:
 *         description: Sucesso ao obter as imagens.
 *       404:
 *         description: Nenhuma imagem encontrada para este imóvel.
 *       500:
 *         description: Erro ao tentar recuperar as imagens.
 */

/**
 * @swagger
 * /imagemImovel/edit/{id_imagem}:
 *   put:
 *     summary: Atualiza os detalhes de uma imagem específica
 *     tags: [ImagemImovel]
 *     parameters:
 *       - in: path
 *         name: id_imagem
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da imagem a ser atualizada
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               imovel:
 *                 type: string
 *                 description: Novo caminho ou referência da imagem.
 *               status:
 *                 type: string
 *                 description: Novo status da imagem.
 *     responses:
 *       200:
 *         description: Imagem atualizada com sucesso.
 *       404:
 *         description: Imagem não encontrada.
 *       500:
 *         description: Erro ao tentar atualizar a imagem.
 */

/**
 * @swagger
 * /imagemImovel/delete/{id_imagem}:
 *   delete:
 *     summary: Exclui uma imagem específica
 *     tags: [ImagemImovel]
 *     parameters:
 *       - in: path
 *         name: id_imagem
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da imagem a ser excluída
 *     responses:
 *       200:
 *         description: Imagem excluída com sucesso.
 *       404:
 *         description: Imagem não encontrada.
 *       500:
 *         description: Erro ao tentar excluir a imagem.
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     ImagemImovel:
 *       type: object
 *       properties:
 *         id_imagem:
 *           type: integer
 *           description: ID da imagem.
 *         foto:
 *           type: string
 *           description: Caminho da imagem.
 *         status:
 *           type: string
 *           description: Status da imagem.
 *         id_novo_imovel:
 *           type: integer
 *           description: ID do imóvel associado.
 *         id_user:
 *           type: integer
 *           description: ID do usuário que fez o upload da imagem.
 *       required:
 *         - foto
 *         - status
 *         - id_novo_imovel
 *         - id_user
 *       example:
 *         id_imagem: 1
 *         foto: "/imoveis/imovel1.jpg"
 *         status: "Ativa"
 *         id_novo_imovel: 10
 *         id_user: 5
 */



module.exports = router;
