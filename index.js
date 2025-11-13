require('dotenv').config();
require('./config/passport'); // Import Passport configuration
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const path = require('path');
const port = require('./config/database').port;
const app = express();


// session middleware
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));



// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/auth', require('./routes/auth'));
app.use('/books',require('./routes/books'));
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'view', 'login.html'));
});

app.get('/profile', isLoggedIn, (req, res) => {
    res.sendFile(path.join(__dirname, 'view', 'profile.html'));
});











mongoose.connect(process.env.URL)
    .then(() => {
        console.log('MongoDB connected');
        app.listen(port, () => {
            console.log(`Express app listening on port ${port}`);
        });
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });


function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
}

