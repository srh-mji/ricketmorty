// Import express module
const express = require('express');

// Import helmet to secure Express app by setting various HTTP headers
const helmet = require("helmet");

// Access to the path of our file system
const path = require('path');

// // Routes declaration
const urlRoutes = require('./routes/url');

// Create express application
const app = express();


// Middleware Header which unblocks some CORS security systems error
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });


// Transforms the data from the POST request into exploitable JSON object
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Secure Express
app.use(helmet());

// // Middleware transmit requests to these urls to the corresponding routes
app.use('/api/url', urlRoutes);

// Export of the express application for declaration in server.js
module.exports = app;