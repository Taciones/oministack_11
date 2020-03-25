
/**
 * Migration >> Historico do banco de dados, tipo um versionmaneto do BD. Mais facil com varios desenvolvedores.
 * migration CLI**
 *Code below will create the migration file for the database. 
 *npx knex migrate:make create_ongs 
 *code below will start the tables. will make them available.
 npx knex migrate:latest
 Code below will undo the migration. Will delete the latests changes
 npx migrate:rollback

 code below will list all modifications done
 npx migrate:status
 */



exports.up = function(knex) {
  return knex.schema.createTable('ongs', function (table) {
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf').notNullable();
  });
};

exports.down = function(knex) {
  return  knex.schema.dropTable('ongs');
  
};
