const router = require('express').Router();
const {getUsers, getOneUser, insert} = require('../controllers/Users');
const validate = require('../middlewares/validate');
const {createUser} = require('../validations/Users');

router.route('/').get(getUsers);

router.route('/:id').get(getOneUser);

router.route('/').post(validate(createUser),insert);


module.exports = router;
