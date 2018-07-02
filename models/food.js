const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)

class Food {
  static all() {
    return database.select().from('foods')
  }
}

module.exports = Food
