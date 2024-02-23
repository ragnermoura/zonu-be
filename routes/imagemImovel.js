const express = require("express");
const router = express.Router();
const imovelController = require("../controllers/imagemImovelController");
const { imageUpload } = require("../helpers/file-uploader");

router.post("/cadastro", imageUpload.array('imovel'), imovelController.uploadImages);
router.get("/:id_user", imovelController.getImagesByImovelId);
router.patch("/editar/:id_imagem", imageUpload.single('imovel'), imovelController.editImage);
router.delete("/deletar/:id_imagem", imovelController.deleteImage);

module.exports = router;
