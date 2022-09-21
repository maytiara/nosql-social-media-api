const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  createFriend,
  deleteFriend
} = require('../../controllers/userController');

// /api/users
router.route('/')
      .get(getSingleUser)
      .get(getUsers)
      .post(createUser)
      .put(updateUser)
      .delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId')
      .post(createFriend)
      .delete(deleteFriend);

module.exports = router;