const express = require('express');
const { isAuth, isValidHostname, isAdmin } = require('../../middlewares/auth');
const usersController = require('../../controller/v1/users-controller');

const router = express.Router();

router.post('/create', usersController.createUser);
router.post('/delete', isAuth, isAdmin, usersController.deleteUser);
router.post('/update', isValidHostname, isAuth, usersController.updateUser);
router.get('/get-all', isAuth, isAdmin, usersController.getUser);
router.post('/login', usersController.login);

module.exports = router;
