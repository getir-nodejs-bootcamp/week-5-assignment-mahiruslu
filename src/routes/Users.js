const router = require('express').Router();
const {getUsers, getOne, insert,login} = require('../controllers/Users');
const validate = require('../middlewares/validate');
const {createUser,loginUser} = require('../validations/Users');
const {authToken} = require('../middlewares/authenticate');

router.route('/login').post(validate(loginUser,"body") ,login);
router.route('/:id').get(getOne);


router.route('/').get(authToken,getUsers);
router.route('/').post(authToken,validate(createUser),insert);


module.exports = router;
