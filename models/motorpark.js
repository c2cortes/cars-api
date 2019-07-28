'use strict';
module.exports = (sequelize, DataTypes) => {
  const MotorPark = sequelize.define('MotorPark', {
    name:     DataTypes.STRING,
    city:     DataTypes.STRING,
    address:  DataTypes.STRING
  }, {});
  MotorPark.associate = function(models) {
    // associations can be defined here
  };
  return MotorPark;
};