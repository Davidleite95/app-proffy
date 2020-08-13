import Knex from 'knex' 

//alterações para realizar no banco de dados
//site: knexjs.org / npm install sqlite3 - não tem como decorar kkkk 

export async function up(knex: Knex){
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.string('bio').notNullable();
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('users');    
}

