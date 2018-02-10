
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', table => {
    table.increments();
    table.string('title', 40).notNullable();
    table.text('body').notNullable();
    table.integer('author_id').unsigned().notNullable(); //unsigned = only positive integer
    table.foreign('author_id').references('id').inTable('users'); //user can be author, and commenter
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
