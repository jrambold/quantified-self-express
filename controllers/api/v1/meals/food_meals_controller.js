const Meal = require('../../../../models/meal')
const Food = require('../../../../models/food')

const create = function(req, res, next) {

  Meal.create(req.params.meal_id, req.params.id)
    .then(function(result) {
      res.json(message = {"message": `Successfully added ${req.params.id} to ${req.params.meal_id}`})
    })
}

const destroy = function(req, res, next) {

  Meal.destroy(req.params.meal_id, req.params.id)
    .then(function(result) {
      res.json({"message": `Successfully removed ${req.params.id} from ${req.params.meal_id}`})
    })
}

module.exports = { create, destroy }
