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

const show = function(req, res, next) {
  Food.show(req.params.id)
    .then(function(food) {
      res.json(food)
    })
}

module.exports = { index, create, show }
