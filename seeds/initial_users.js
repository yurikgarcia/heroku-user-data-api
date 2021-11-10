const dummy_data = require('../dummy_data')
dummy_data_with_ids = dummy_data.map((dataPoint,ind)=>({id:ind+1,...dataPoint}))
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert(dummy_data_with_ids);
    });
};
