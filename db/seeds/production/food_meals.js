
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('food_meals').del()
    .then(function () {
    });
};
