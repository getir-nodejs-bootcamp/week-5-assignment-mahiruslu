const router = require('express').Router();
const {getAllProducts,getOneProduct,insertProduct,updateProduct,deleteProduct} = require('../controllers/Product');
const validate = require('../middlewares/validate');
const productValidation = require('../validations/Product');
const {authToken} = require('../middlewares/authenticate');

router.route('/').get(getAllProducts);
router.route('/:id').get(getOneProduct);

router.route('/').post(authToken,insertProduct);
router.route('/:id').patch(authToken,updateProduct);
router.route('/:id').delete(authToken,deleteProduct);




module.exports = router;