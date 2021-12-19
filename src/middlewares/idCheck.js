const hs = require('http-status');

const idChech = (req,res,next) => {
    req?.params?.id?.match(/^[0-9a-fA-F]{24}$/) ? next() : res.status(hs.BAD_REQUEST).send('Invalid id');
}