var express = require('express');
var router = express.Router();

const favorite_foods = require('../controllers/api/v1/favorite_foods_controller')

router.get('/', favorite_foods.index)

module.exports = router;
