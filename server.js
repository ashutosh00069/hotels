const express = require("express");
const app = express();
const db = require('./db'); // Ensure this file connects to MongoDB
const port = 3000;
const localStrategy = require('passport-local').Strategy;
// Use express.json() instead of bodyParser
app.use(express.json()); 


// Middleware function
const logRequest = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] Request Made to : ${req.dbUri}`);
    next();
}

app.use(logRequest)
app.get('/',(req, res) => {
    res.send('Welcome to my hotel, how can I help you');
});


// Person routes
const  menuItemRoutes = require('./routes/menuItemRoutes');
const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

