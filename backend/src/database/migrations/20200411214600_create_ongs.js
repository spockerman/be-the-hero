
exports.up = function(knex) {
  knex.schema.createTable('ongs', function (table) {
  table.string('id').primaty();
  table.string('name').notNulable();
  table.string('email').notNulable();
  table.string('whatapp').notNulable();
  table.string('city').notNulable();
  table.string('state', 2).notNulable();
  })
};
exports.down= function(knex){
  return knex.schema.dropTable('ongs');
}