//tell knex what environment im in

var env = process.env.NODE_ENV || 'development';
//env === 'development'

var config = require('../knexfile')[env];
module.exports = require('knex')(config);