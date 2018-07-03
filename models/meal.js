const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)

class Meal {
  static all() {
    return database('meals').select('id', 'name').map(this.foods)
  }

  static show(id) {
    return database('meals').select('id', 'name').where({ id: id }).map(this.foods)
  }

  static create(meal,food) {
    return database('food_meals').insert({ meal_id: meal, food_id: food })
      .returning(true)
  }
}

module.exports = Meal
