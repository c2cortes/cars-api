const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const connection = new Sequelize('cars_api', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql', /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
    port: '8889'
});

module.exports = { connection }