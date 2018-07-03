const Meal = require('../../../models/meal')

const index = function(req, res, next) {
  Meal.all()
    .then(function(meals) {
      res.json(meals)
    })
}

const show = function(req, res, next) {
  Meal.show(req.params.meal_id)
    .then(function(meal) {
      res.json(meal)
    })
}



module.exports = { index, show }
