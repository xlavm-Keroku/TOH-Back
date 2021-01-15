
const express = require('express')
const cors = require('cors')
const router = express.Router()
const heroController = require('../controllers/hero.controller');

router.use(cors())

router.post('/', heroController.create);
router.put('/:id', heroController.update);
router.delete('/:id', heroController.delete);
router.get('/', heroController.findAll);
router.get('/:id', heroController.findOne);

module.exports = router