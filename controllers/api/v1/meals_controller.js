const Meal = require('../../../models/meal')

const index = function(req, res, next) {
  Meal.all()
    .then(function(foods) {
      res.json(foods)
    })
}



module.exports = { index }
