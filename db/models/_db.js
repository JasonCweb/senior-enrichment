const Sequelize = require('sequelize');
var config = require('../../config/config.json');

const db = new Sequelize(config.database, config.username, config.password, config)

module.exports = db;
