const controller = require('../controller/criancasController')
const express = require('express')

const router = express.Router()

router.get("/crianca", controller.findAllCriancas)
router.get("/crianca/:id", controller.findCriancaById)



module.exports = router