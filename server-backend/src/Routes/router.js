const express = require('express');
const router = express.Router();
const handlerController = require('../Controller/handlerController')

router.get('/getAdmins', handlerController.getAdmins)

module.exports = router;