
exports.up = function(knex, Promise) {
  return knex.schema.createTable('food_meals', function(table) {
    table.increments('id').primary();
    table.integer('food_id').references('foods.id');
    table.integer('meal_id').references('meals.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('food_meals');
};
