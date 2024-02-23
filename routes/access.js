const express = require("express");
const router = express.Router();
const acessosController = require("../controllers/accessController");

router.post("/novo", acessosController.novoAcesso);

module.exports = router;
