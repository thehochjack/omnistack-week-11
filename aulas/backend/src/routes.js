const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();

routes.post('/sessions', SessionController.create);

// List
routes.get('/ongs', OngController.index);
routes.get('/incidents', IncidentController.index);
routes.get('/profile', ProfileController.index);
// Create
routes.post('/ongs', OngController.create);
routes.post('/incidents', IncidentController.create);
// Remove
routes.delete('/incidents/:id', IncidentController.delete);
// Edit 



module.exports = routes; 