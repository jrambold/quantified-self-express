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
}

module.exports = Food
