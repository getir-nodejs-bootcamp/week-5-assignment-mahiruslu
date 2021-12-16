const router = require('express').Router();
const {get} = require('../controllers/Users');

router.route('/').get(get);

module.exports = router;
