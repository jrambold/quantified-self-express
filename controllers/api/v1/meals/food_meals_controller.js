const Meal = require('../../../../models/meal')
const Food = require('../../../../models/food')

const create = function(req, res, next) {

  Meal.create(req.params.meal_id, req.params.id)
    .then(function(result) {
      res.json(result[0])
    })
}

module.exports = { create }
