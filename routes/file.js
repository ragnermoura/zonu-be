const express = require("express");
const router = express.Router();
const fileController = require("../controllers/fileController");
const { imageUpload, fileUpload } = require("../helpers/file-uploader");

router.patch("/upload-user-image/:id_user", imageUpload.single('avatar'), fileController.uploadImage);
router.patch("/upload-user-rg/:id_user", fileUpload.single('documentos'), fileController.uploadRg);
router.patch("/upload-user-cnpj/:id_user", fileUpload.single('documentos'), fileController.uploadCnpj);
router.get("/get-avatar/:id_user", fileController.getImage);
router.get("/get-rg/:id_user", fileController.getRg);
router.get("/get-cnpj/:id_user", fileController.getCnpj);



/**
 * @swagger
 * components:
 *   schemas:
 *     UploadResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           description: Indica se a operação foi bem-sucedida
 *         mensagem:
 *           type: string
 *           description: Mensagem sobre o resultado da operação
 *   parameters:
 *     idUser:
 *       in: path
 *       name: id_user
 *       required: true
 *       schema:
 *         type: string
 *       description: ID do usuário
 */

/**
 * @swagger
 * /upload-user-image/{id_user}:
 *   patch:
 *     summary: Faz upload da imagem de um usuário
 *     tags: [Upload de Arquivos]
 *     parameters:
 *       - $ref: '#/components/parameters/idUser'
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               avatar:
 *                 type: string
 *                 format: binary
 *                 description: Arquivo de imagem para upload
 *     responses:
 *       201:
 *         description: Imagem cadastrada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UploadResponse'
 *       500:
 *         description: Erro ao realizar upload
 */

/**
 * @swagger
 * /upload-user-rg/{id_user}:
 *   patch:
 *     summary: Faz upload do RG de um usuário
 *     tags: [Upload de Arquivos]
 *     parameters:
 *       - $ref: '#/components/parameters/idUser'
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               documentos:
 *                 type: string
 *                 format: binary
 *                 description: Arquivo PDF do RG para upload
 *     responses:
 *       201:
 *         description: Pdf do RG cadastrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UploadResponse'
 *       500:
 *         description: Erro ao realizar upload
 */

/**
 * @swagger
 * /upload-user-cnpj/{id_user}:
 *   patch:
 *     summary: Faz upload do CNPJ de um usuário
 *     tags: [Upload de Arquivos]
 *     parameters:
 *       - $ref: '#/components/parameters/idUser'
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               documentos:
 *                 type: string
 *                 format: binary
 *                 description: Arquivo PDF do CNPJ para upload
 *     responses:
 *       201:
 *         description: Pdf do CNPJ cadastrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UploadResponse'
 *       500:
 *         description: Erro ao realizar upload
 */

/**
 * @swagger
 * /get-avatar/{id_user}:
 *   get:
 *     summary: Recupera a imagem de um usuário
 *     tags: [Recuperação de Arquivos]
 *     parameters:
 *       - $ref: '#/components/parameters/idUser'
 *     responses:
 *       200:
 *         description: Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UploadResponse'
 *       500:
 *         description: Erro na recuperação
 */

/**
 * @swagger
 * /get-rg/{id_user}:
 *   get:
 *     summary: Recupera o arquivo PDF do RG de um usuário
 *     tags: [Recuperação de Arquivos]
 *     parameters:
 *       - $ref: '#/components/parameters/idUser'
 *     responses:
 *       200:
 *         description: Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indica se a operação foi bem-sucedida
 *                 message:
 *                   type: string
 *                   description: Mensagem sobre o resultado da operação
 *                 pdf_rg:
 *                   type: string
 *                   description: URL para o arquivo PDF do RG
 *       500:
 *         description: Erro na recuperação
 */

/**
 * @swagger
 * /get-cnpj/{id_user}:
 *   get:
 *     summary: Recupera o arquivo PDF do CNPJ de um usuário
 *     tags: [Recuperação de Arquivos]
 *     parameters:
 *       - $ref: '#/components/parameters/idUser'
 *     responses:
 *       200:
 *         description: Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indica se a operação foi bem-sucedida
 *                 message:
 *                   type: string
 *                   description: Mensagem sobre o resultado da operação
 *                 pdf_cnpj:
 *                   type: string
 *                   description: URL para o arquivo PDF do CNPJ
 *       500:
 *         description: Erro na recuperação
 */





module.exports = router;