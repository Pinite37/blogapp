const express = require('express');


const { getAllUsers, getUserById, updateUser, deleteUser }  = require('../controllers/user.controller');
const authenticateUser = require('../middlewares/auth.middleware');
const roleAuthorization = require('../middlewares/role.middleware');


const router = express.Router();


router.get('/', authenticateUser, roleAuthorization('admin'), getAllUsers);
router.get('/:id', authenticateUser, getUserById);
router.put('/:id', authenticateUser, updateUser);
router.delete('/:id', authenticateUser, roleAuthorization('admin'), deleteUser);


module.exports = router;