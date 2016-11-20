exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table){
      table.increments();
      table.string('user').notNullable().unique();
      table.string('password_digest').notNullable();
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users')
};
