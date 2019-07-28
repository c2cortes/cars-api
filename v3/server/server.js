const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');

const searchesController = require('./controllers/SearchesController');

const app = express();
const apiVersion = '/v3';

app.use(bodyParser.json());

////////*** Routes ***/////////

app.get(apiVersion + '/buscar', searchesController.searchCarsByMotorPark);

////////*** End Routes  ***/////////

app.listen(3000, () => {
	console.log('Listening port 3000');
});