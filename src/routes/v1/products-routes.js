const express = require('express');
const productsController = require('../../controller/v1/products-controller');

const router = express.Router();

router.post('/create', productsController.createProduct);
router.get('/get-all', productsController.getProduct);
router.get('/get-by-user/:userid', productsController.getProductByUser);

module.exports = router;
