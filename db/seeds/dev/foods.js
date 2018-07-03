
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('foods').del()
    .then(function () {
      // Inserts seed entries
      return knex('foods').insert([
        {id: 1, name: 'qwer', calories: '23'},
        {id: 2, name: 'asdf', calories: '42'},
        {id: 3, name: 'zxcv', calories: '128'}
      ]);
    });
};
