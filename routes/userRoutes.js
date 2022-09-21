const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  createFriend,
  removeFriend
} = require('../controllers/userController');

// /api/users
router.route('/')
      .get(getSingleUser)
      .post(createUser);

// /api/:users/:userId
router.route('/:userId')
      .get(getUsers)
      .put(updateUser)
      .delete(deleteUser);

// /api/users/:userId/friends
router.route('/:userId/friends')
      .post(createFriend);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId')
      .delete(removeFriend);

module.exports = router;