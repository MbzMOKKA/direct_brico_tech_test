//Imports
const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const app = express();
dotenv.config();

const userRoutes = require('./compiled/routes/user');
const pizzaRoutes = require('./compiled/routes/pizza');

//Access to the API from any origin
app.use((_req, _res, _next) => {
    _res.setHeader('Access-Control-Allow-Origin', '*');
    _res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    _res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    _next();
});

//Request's body can be used
app.use(express.json());

//Routes
app.use('/api/auth', userRoutes);
app.use('/api/pizza', pizzaRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));

//Exports
module.exports = app;
