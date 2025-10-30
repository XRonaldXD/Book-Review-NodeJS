const passport = require('passport');

const googleAuth = passport.authenticate('google', { scope: ['email', 'profile'] });

const googleCallback = passport.authenticate('google', {
    successRedirect: '/profile',
    failureRedirect: '/auth/failure',
});

const logout = (req, res) => {
    req.logout(() => {
        req.session.destroy();
        res.send('Goodbye!');
    });
};

const getProfile = (req, res) => {
    if (req.isAuthenticated()) {
        res.json(req.user);
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
};

const getCurrentUser = (req, res) => {
    if (req.isAuthenticated()) {
        res.json({ user: req.user });
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
};

const authFailure = (req, res) => {
    res.send("Authentication Failed");
};

module.exports = {
    googleAuth,
    googleCallback,
    logout,
    getProfile,
    getCurrentUser,
    authFailure
};