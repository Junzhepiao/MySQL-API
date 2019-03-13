exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('transactions').del()
    .then(function () {
      // Inserts seed entries
      return knex('transactions').insert([
        {user_id: 1, amount: 100, type: "checking", business_name: "Galvanize Inc"},
        {user_id: 2, amount: 500, type: "checking", business_name: "Galvanize Inc"}
      ]);
    });
};
