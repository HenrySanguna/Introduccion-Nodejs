const express = require('express');
const usersController = require('../../controller/v1/users-controller');

const router = express.Router();

router.post('/create', usersController.createUser);
router.post('/delete', usersController.deleteUser);
router.post('/update', usersController.updateUser);
router.get('/get-all', usersController.getUser);

module.exports = router;
