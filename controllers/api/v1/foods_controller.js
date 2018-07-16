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
      if(food[0]) {
        res.json(food[0])
      } else {
        res.status(400).send()
      }
    })
}

const show = function(req, res, next) {
  Food.show(req.params.id)
    .then(function(food) {
      if(food) {
        res.json(food)
      }
      else {
        res.status(404)
      }
    })
}

const update = function(req, res, next) {
  Food.update(req.params.id, req.body.food)
    .then(function(food) {
      if(food[0]) {
        res.json(food[0])
      }
      else {
        res.status(404).send()
      }
    })
}

const destroy = function(req, res, next) {
  Food.destroy(req.params.id)
    .then(function(food) {
      res.status(204).send()
    })
}

const recipes = function(req, res, next) {
  Food.recipes(req.params.id)
    .then(function(food) {
      res.send(food)
    })
}

module.exports = { index, create, show, update, destroy, recipes }
