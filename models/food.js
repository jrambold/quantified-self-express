const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)

class Food {
  static all() {
    return database.select().from('foods')
  }

  static create(params) {
    return database('foods').insert(params).returning(['id', 'name', 'calories'])
  }

  static show(id) {
    return database('foods').where({ id: id }).limit()
  }

  static update(id, params) {
    return database('foods').where({ id: id }).update(params).returning(['id', 'name', 'calories'])
  }

  static destroy(id) {
    return database('foods').where({ id: id }).del()
  }

  static favorites() {
      return database.raw(`SELECT timesEaten, json_agg(json_build_object('name', name, 'calories', calories)) AS foods
                           FROM
                           (
                             SELECT COUNT(foods.id) AS timesEaten, foods.name, foods.calories
                             FROM foods
                             LEFT JOIN food_meals ON foods.id = food_meals.food_id
                             GROUP BY foods.id
                           ) AS favTable
                           GROUP BY timesEaten
                           ORDER BY timesEaten DESC`)
      .then(function(fav_foods) {
        return fav_foods.rows
      })
  }
}



module.exports = Food
