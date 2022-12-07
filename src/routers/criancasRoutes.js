const controller = require('../controller/criancasController')
const express = require('express')

const router = express.Router()

router.get("/crianca", controller.findAllCriancas)
router.get("/crianca/:id", controller.findCriancaById)
router.post("/crianca", controller.addNewCrianca);
router.patch("/atualizar/:id", controller.updateCriancas)
router.delete("/crianca/:id", controller.deleteCriancasById)


module.exports = router


