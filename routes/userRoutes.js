const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser
} = require('../../controllers/userController');

// /api/users
router.route('/')
      .get(getSingleUser)
      .get(getUsers)
      .post(createUser)
      .put(updateUser)
      .delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.


module.exports = router;