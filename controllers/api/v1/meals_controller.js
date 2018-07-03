const Meal = require('../../../models/meal')

const index = function(req, res, next) {
  Meal.all()
    .then(function(foods) {
      res.json(foods)
    })
}

const show = function(req, res, next) {
  Meal.show(req.params.meal_id)
    .then(function(meal) {
      res.json(meal)
    })
}



module.exports = { index, show }
