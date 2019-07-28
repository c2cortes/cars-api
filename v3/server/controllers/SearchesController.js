const { Car } = require('../models/car');

exports.searchCarsByMotorPark = (req, res) => {
    Car.findAll({ where: { identification: '111' } }).then(cars => {
		  res.send(cars);
    });
}