const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/create', userController.createUser);
router.get('/:id', userController.getUser);
router.put('/:id', userController.updateUser);

module.exports = router;