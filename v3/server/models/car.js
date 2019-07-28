
const Sequelize     = require('sequelize');
const {connection}  = require('../db/sequelize');

const Car = connection.define('car', {
	identification: Sequelize.STRING,
    color: Sequelize.STRING
});

module.exports = { Car };