const controller = require('../controller/padrinhosController');
const express = require('express');

const router = express.Router();


router.post("/padrinho", controller .addNewPadrinho);
router.patch("/atualizarPadrinho/:id", controller.updatePadrinhos)
router.delete("/padrinho/:id", controller.deletePadrinhoById)
router.get("/padrinho", controller.findAllPadrinhos)
router.get("/padrinho/:id", controller.findPadrinhoById)



module.exports = router