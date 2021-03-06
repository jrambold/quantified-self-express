const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)
const fetch = require('node-fetch')

class Food {
  static all() {
    return database.select().from('foods')
  }

  static create(params) {
    return database('foods').insert(params).returning(['id', 'name', 'calories'])
  }

  static show(id) {
    return database('foods').where({ id: id }).limit(1)
  }

  static update(id, params) {
    return database('foods').where({ id: id }).update(params).returning(['id', 'name', 'calories'])
  }

  static destroy(id) {
    return database('foods').where({ id: id }).del()
  }

  static favorites() {
      return database.raw(`SELECT timesEaten, json_agg(json_build_object('name', name, 'calories', calories, 'mealsWhenEaten', mealsWhenEaten)) AS foods
                           FROM
                           (
                             SELECT COUNT(foods.id) AS timesEaten, foods.name, foods.calories, array_agg(DISTINCT meals.name) AS mealsWhenEaten
                             FROM foods
                             LEFT JOIN food_meals ON foods.id = food_meals.food_id
                             LEFT JOIN meals ON food_meals.meal_id = meals.id
                             GROUP BY foods.id
                             HAVING COUNT(foods.id) > 0
                           ) AS favTable
                           GROUP BY timesEaten
                           ORDER BY timesEaten DESC`)
      .then(function(fav_foods) {
        return fav_foods.rows
      })
  }

  static recipes(id) {
    return database('foods').where({ id: id }).first()
    .then(function(food) {
      return fetch(`http://api.yummly.com/v1/api/recipes?allowedIngredient[]=` + food.name.toLowerCase(), {
        headers: {
          'X-Yummly-App-ID': process.env.YUMMLYID,
          'X-Yummly-App-Key': process.env.YUMMLYKEY
        }
      })
      .then(function(response) {
        return response.json()
      })
      .then(function(recipes) {
        return recipes.matches.map(function(recipe) {
          return { name: recipe.recipeName, url: `http://www.yummly.com/recipe/${recipe.id}` }
        })
      })
    })
  }
}
module.exports = Food
