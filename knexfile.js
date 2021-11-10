// Update with your config settings.
require("dotenv").config();
console.log(`THE URL`,process.env.DATABASE_URL)
const s = require('./')
module.exports = {

  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  },

};
