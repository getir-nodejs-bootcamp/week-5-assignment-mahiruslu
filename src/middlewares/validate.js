const hs = require('http-status');

const validate = (schema, source) => (req, res, next) => {
    const result = schema.validate(source);
    if (result.error) {
        res.status(hs.BAD_REQUEST).send(result.error);
        return;
    }
    next();
}

module.exports = validate;