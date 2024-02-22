const express = require("express");
const router = express.Router();

const infoController = require("../controllers/infoController");

router.get("/", infoController.obterInfos);
router.get("/:id_info", infoController.obterInfoPorId);
router.post("/cadastro", infoController.criarInfo);
router.put("/:id_info", infoController.atualizarInfo);
router.delete("/:id_info", infoController.deletarInfo);

module.exports = router;
