const express = require('express');
const userRoutes = express.Router();
const controller = require('../controllers/users.controller');

userRoutes.get('/', controller.getUsers);

/* Crear datos */

userRoutes.post('/create', controller.createUser);

module.exports = userRoutes;