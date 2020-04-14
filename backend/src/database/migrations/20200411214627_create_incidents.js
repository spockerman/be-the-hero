
exports.up = function(knex) {
  knex.schema.createTable('incidents', function (table) {
  table.incriments();
  table.string('title').notNulable();
  table.string('description').notNulable();
  table.decimal('value').notNulable();

  table.string('ongs_id').notNullable();

  table.foreign('ongs_id').references('id').inTable('ongs');

  })
};
exports.down= function(knex){
  return knex.schema.dropTable('incidents');
}