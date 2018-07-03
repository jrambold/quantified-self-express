var express = require('express');
var router = express.Router();

const foods = require('../controllers/api/v1/foods_controller')

router.get('/', foods.index)
router.post('/', foods.create)
router.get('/:id', foods.show)

module.exports = router;
