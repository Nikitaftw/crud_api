const express = require('express');
const categoryController = require('../controller/categoryController');

const router = express.Router();

router.get('/categories', categoryController.getAllCategories);
router.get('/category/:id', categoryController.getCategory);
router.post('/category', categoryController.createCategory);
router.patch('/category/:id', categoryController.updateCategory);
router.delete('/category/:id', categoryController.deleteCategory);

module.exports = router;