const express = require('express')
const router = express.Router()
const controller = require('../controllers/filmesController')

//GET
router.get('/', controller.getFilmes)

//POST
router.post('/', controller.postFilme)

//PUT
router.put('/:titulo', controller.putFilme)

//DELETE
router.delete('/:titulo', controller.deleteFilme)

module.exports = router