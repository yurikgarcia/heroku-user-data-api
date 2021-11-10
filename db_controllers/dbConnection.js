const knex = require("knex");
const configs = require("../knexfile");
const environment = process.env.NODE_ENV; // IMPORTANT - HEROKU PROVIDES NODE_ENV 'production'

module.exports = knex(configs[environment]);
