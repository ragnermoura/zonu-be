const express = require("express");
const router = express.Router();
const condominioController = require("../controllers/imagemCondominioController");
const { imageUpload } = require("../helpers/file-uploader");

router.post("/cadastro", imageUpload.array('condominio'), condominioController.uploadImages);
router.get("/:id_user", condominioController.getImagesByImovelId);
router.patch("/editar/:id_imagem", imageUpload.single('condominio'), condominioController.editImage);
router.delete("/deletar/:id_imagem", condominioController.deleteImage);

module.exports = router;
