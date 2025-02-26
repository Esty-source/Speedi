const express = require('express');
const router = express.Router();

// Example route for user registration
router.post('/register', (req, res) => {
    // Registration logic here
    res.send('User registered');
});

// Example route for user login
router.post('/login', (req, res) => {
    // Login logic here
    res.send('User logged in');
});

module.exports = router