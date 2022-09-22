const User = require("../models/User");

module.exports = {
	//  get all users
	getUsers(req, res) {
		User.find({})
			.then((users) => {
				res.json(users);
			});
	},
	// get a single user by _id /api/users/ObjectId
	getSingleUser(req, res) {
		// the requested route parameter, calling the collection ID
		User.findOne({ users: req.params.userId }) //check this added.users.$
			.populate({ path: "thoughts", select: "-__v" }) //fieldname & __v: (versionKey) || the internal revision of the document
			.populate({ path: "friends", select: "-__v" })
			.then((users) => {
				res.json(users);
			});
	},
	// create a new user
	createUser(req, res) {
		User.create(req.body).then((dbUserData) => {
			res.json(dbUserData);
		});
	},
	// update a user by _id
	updateUser(req, res) {
		User.findOneAndUpdate(
			{ users: req.params.userId },
			{ $addToSet: { ":userId": req.body }}, // this operator replaces the value of the field
			{ runValidators: true, new: true } // turn on the validators in models
			// { runValidators: true, new: true, upsert: true }
		).then((users) => {
			res.json(users);
		});
	},
	// remove user by _id
	deleteUser(req, res) {
		User.findOneAndDelete({ _id: req.params.userId }).then((users) => {
			res.json(users);
		});
	},
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
