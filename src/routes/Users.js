const router = require('express').Router();
const {getUsers, getOne, insert} = require('../controllers/Users');
const validate = require('../middlewares/validate');
const {createUser} = require('../validations/Users');

router.route('/').get(getUsers);

router.route('/:id').get(getOne);

router.route('/').post(validate(createUser),insert);


module.exports = router;
