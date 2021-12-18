const jwt = require('jsonwebtoken');
const hs = require('http-status');

const authToken = (req, res, next) => {
    const token = req.headers?.authorization?.split(' ')[1];
    if(!token) return res.status(hs.UNAUTHORIZED).send({message: 'No token provided'});
    try {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,(err, user)=>{
            if (err) return res.status(hs.FORBIDDEN).send({message: 'Invalid token'});
            req.user = user;
            next();
        });
    } catch (error) {
        res.status(hs.UNAUTHORIZED).send({message: 'Invalid token'});
    }
};

module.exports = {authToken};