
exports.up = function(knex, Promise) {
  return knex.schema.createTable('food_meals', function(table) {
    table.integer('food_id');
    table.integer('meal_id');
    table.foreign('food_id').references('id').inTable('foods');
    table.foreign('meal_id').references('id').inTable('meals');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('food_meals');
};
