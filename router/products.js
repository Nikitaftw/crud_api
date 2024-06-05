const express = require('express');
const productController = require('../controller/productController');

const router = express.Router();

router.get('/products', productController.getAllProducts);
router.get('/product/:id', productController.getProduct);
router.post('/product', productController.createProduct);
router.patch('/product/:id', productController.updateProduct);
router.delete('/product/:id', productController.deleteProduct);

module.exports = router;