const User = require("../models/User");

module.exports = {
	//  get all users
	getUsers(req, res) {
		User.find({})
			.populate({ path: "thoughts", select: "-__v" }) //fieldname &  __v: (versionKey) || the internal revision of the document
			.populate({ path: "friends", select: "-__v" }) //fieldname
			.then((users) => {
				res.json(users);
			});
	},
	// get a single user by _id
	getSingleUser(req, res) {
		User.findOne({ users: req.params.userId }) // the requested route parameter, calling the collection ID
			.populate({ path: "thoughts", select: "-__v" })
			.populate({ path: "friends", select: "-__v" })
			.then((users) => {
				res.json(users);
			});
	},
  // create a new user
  createUser(req, res) {
    User.create(req.body)
    .then((dbUserData) => {
      res.json(dbUserData)
    });
  }
};

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
