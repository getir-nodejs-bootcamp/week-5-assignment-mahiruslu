const router = require('express').Router();
const {getUsers, getOne, insert,login, resetPassword} = require('../controllers/Users');
const validate = require('../middlewares/validate');
const {createUser,loginUser,resetUserPassword} = require('../validations/Users');
const {authToken} = require('../middlewares/authenticate');



router.route('/').get(authToken,getUsers);
router.route('/').post(validate(createUser),insert);

router.route('/:id').get(authToken,getOne);
router.route('/login').post(validate(loginUser,"body") ,login);
router.route('/reset-password').post(validate(resetUserPassword,"body"),resetPassword);

module.exports = router;
