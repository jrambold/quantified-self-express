const Food = require('../../../models/food')

const index = function(req, res, next) {
  Food.all()
    .then(function(foods) {
      res.json(foods)
    })
}

module.exports = { index }
