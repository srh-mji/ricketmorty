// Import express module for being able to use express Router
const express = require('express');
// Call Router
const router = express.Router();

// Import the controller to associate the functions to the different routes
const urlCtrl = require('../controllers/url');

// Add middleware

// Creation of the different routes of the API
router.post('/connectedAccount', urlCtrl.getUrl );

module.exports = router;