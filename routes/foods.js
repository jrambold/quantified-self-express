var express = require('express');
var router = express.Router();

const foods = require('../controllers/api/v1/foods_controller')

/* GET home page. */
router.get('/', foods.index)

module.exports = router;
