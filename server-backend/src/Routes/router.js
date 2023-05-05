const express = require('express');
const router = express.Router();
const handlerController = require('../Controller/handlerController')

router.post('/getAdmins', handlerController.getAdmins)
router.post('/getDesarrolladores', handlerController.getDesarrolladores)
router.post('/getMonedas', handlerController.getMonedas)
router.post('/getDept', handlerController.getDept)
router.post('/getNoticias', handlerController.getNoticias)

module.exports = router;