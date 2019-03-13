
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {email: 'jun@gmail.com', password: 'jun'},
        {email: 'piao@gmail.com', password: 'piao'}
      ]);
    });
};
