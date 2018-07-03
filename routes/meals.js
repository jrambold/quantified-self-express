var express = require('express');
var router = express.Router();

const meals = require('../controllers/api/v1/meals_controller')
const food_meals = require('../controllers/api/v1/meals/food_meals_controller')

router.get('/', meals.index)
router.get('/:meal_id/foods', meals.show)
router.post('/:meal_id/foods/:id', food_meals.create)


module.exports = router;
