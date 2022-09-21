const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  UpdateUser,
  deleteUser
} = require('../controllers/userController');

// /api/users


// /api/users/:userId/friends/:friendId


module.exports = router;