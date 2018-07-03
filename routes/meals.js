var express = require('express');
var router = express.Router();

const meals = require('../controllers/api/v1/meals_controller')

router.get('/', meals.index)


module.exports = router;
