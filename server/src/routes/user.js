const express = require('express');
const { Register, Login } = require('../controllers/user');

const Route = express.Router()


Route.post('/register', Register)

Route.post('/login', Login)

module.exports = Route;