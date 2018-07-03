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
}

module.exports = Food
