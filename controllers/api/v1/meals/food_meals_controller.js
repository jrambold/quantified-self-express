const Meal = require('../../../../models/meal')

const create = function(req, res, next) {
  var food = Food.find(req.params.food_id);
  var meal = Meal.find(req.params.meal_id);

  Meal.create(meal.id, food.id)
    .then(function(result) {
      var message = { 'message': `Successfully added ${food.name} to ${meal.name}`}
        res.json(message)
    })
}

module.exports = { create }
