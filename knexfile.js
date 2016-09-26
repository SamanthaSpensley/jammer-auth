// Update with your config settings.

if(!process.env.NODE_ENV){
  require('dotenv').config();
}

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/jammer'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
