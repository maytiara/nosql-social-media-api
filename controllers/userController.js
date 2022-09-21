const User = require('../models/User');

module.exports = {
  //  getUsers
  getUsers(req,res) {
    User.find({})
    .populate('thoughts') //fieldname
    .populate('friends') //fieldname
    .then((users) => {
      res.json(users);
    })
  },
  getSingleUser(req,res) {

  }
}


//  getUsers,
//  getSingleUser, //populate
//  createUser,
//  updateUser,
//  deleteUser,
//  createFriend,
//  removeFriend
// getUsers(req,res) => {
// 
//   // Grab all the users > and populate thought// (fieldname) & end// (fieldname) data
//   User.find({})
//   .populate('thoughts') //fieldname
//   .populate('friends') //fieldname
//   .then((users) => {
//     res.json(users);
//   })
// }