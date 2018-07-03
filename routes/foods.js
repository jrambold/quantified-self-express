var express = require('express');
var router = express.Router();

const foods = require('../controllers/api/v1/foods_controller')

/* GET home page. */
router.get('/', foods.index)
router.post('/', foods.create)

module.exports = router;
