
const Sequelize     = require('sequelize');
const {connection}  = require('../db/sequelize');

const MotorPark = connection.define('MotorParks', {
	identification: Sequelize.STRING,
    color: Sequelize.STRING
});

module.exports = { MotorPark };