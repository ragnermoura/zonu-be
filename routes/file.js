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



module.exports = router;