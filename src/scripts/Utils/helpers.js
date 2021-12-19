const Crypto = require('crypto-js');
const jwt = require('jsonwebtoken');

const hashPassword = (password) => {
    const hashKey = Crypto.HmacSHA1(password, process.env.PASSWORD_SECRET).toString();
    return Crypto.SHA256(password, hashKey).toString();

};

const generateAccessToken = (user) => {
    return jwt.sign({
        email: user.email,
        ...user
    }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
}

const generateRefreshToken = (user) => {
    return jwt.sign({
        email: user.email,
        ...user
    }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
}

module.exports ={
    hashPassword,
    generateAccessToken,
    generateRefreshToken
}