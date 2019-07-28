'use strict';
module.exports = (sequelize, DataTypes) => {
  const Car = sequelize.define('Car', {
    identification: DataTypes.STRING,
    color:          DataTypes.STRING,
    motorpark_id:   DataTypes.INTEGER
  }, {});
  Car.associate = function(models) {
    // associations can be defined here
  };
  return Car;
};