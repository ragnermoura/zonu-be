const express = require("express");
const router = express.Router();

const infoCondominioController = require("../controllers/infoCondController");

router.get("/", infoCondominioController.obterInfoCondominios);
router.get("/:id_info_condominio", infoCondominioController.obterInfoCondominioPorId);
router.post("/cadastro", infoCondominioController.criarInfoCondominio);
router.put("/:id_info_condominio", infoCondominioController.atualizarInfoCondominio);
router.delete("/:id_info_condominio", infoCondominioController.deletarInfoCondominio);

module.exports = router;
