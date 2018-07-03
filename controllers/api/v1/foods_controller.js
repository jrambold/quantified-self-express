const Food = require('../../../models/food')

const index = function(req, res, next) {
  Food.all()
    .then(function(foods) {
      res.json(foods)
    })
}

const create = function(req, res, next) {
  Food.create(req.body.food)
    .then(function(food) {
      res.json(food[0])
    })
}




module.exports = { index, create }
