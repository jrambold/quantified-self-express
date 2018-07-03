const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)

class Meal {
  static all() {
    return database.raw("SELECT meals.*, array_agg(json_build_object('id',foods.id,'name',foods.name, 'calories', foods.calories)) AS foods FROM meals LEFT JOIN food_meals ON meals.id = food_meals.meal_id LEFT JOIN foods ON food_meals.food_id = foods.id GROUP BY meals.id;")
      .then(function(meals) {
        return meals.rows
      })
  }

  static show(id) {
    return database.raw("SELECT meals.*, array_agg(json_build_object('id',foods.id,'name',foods.name, 'calories', foods.calories)) AS foods FROM meals LEFT JOIN food_meals ON meals.id = food_meals.meal_id LEFT JOIN foods ON food_meals.food_id = foods.id WHERE meals.id = ? GROUP BY meals.id", id)
      .then(function(meal) {
        return meal.rows[0]
      })
  }

  static create(mealId,foodId) {
    return database('food_meals').insert({ meal_id: mealId, food_id: foodId }).returning(['id', 'meal_id', 'food_id'])
  }

  static destroy(mealId,foodId) {
    return database('food_meals').where({'meal_id': mealId, 'food_id': foodId}).del()
  }



}

module.exports = Meal
