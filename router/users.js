const express = require('express');
const userController = require('../controller/userController');

const router = express.Router();

router.get('/users', userController.getAllUsers);
router.get('/user/:id', userController.getUser);
router.post('/user', userController.createUser);
router.patch('/user/:id', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);

module.exports = router;