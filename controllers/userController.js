const User = require("../models/User");

module.exports = {
	//  get all users
	getUsers(req, res) {
		User.find({}).then((users) => {
			res.json(users);
		});
	},
	// get a single user by _id /api/users/ObjectId
	getSingleUser(req, res) {
		// the requested route parameter, calling the collection ID
		User.findOne({ _id: req.params.userId }) //check this added.users.$
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
			{ _id: req.params.usersId },
			{ $addToSet: { users: req.body } }, // this operator replaces the value of the field
			{ upsert: true, new: true } // it updated the new insert value
		).then((users) => {
			res.json(users);
		});
	},
	// remove user by _id
	deleteUser(req, res) {
		User.findOneAndDelete(
			{ users: req.params.usersId },
			{ $pull: { users: req.params.usersId } } // this $pull operator deletes the value of the field
		).then((users) => {
			res.json(users);
		});
	},
};

//  createFriend,
//  removeFriend
// getUsers(req,res) => {
//

// to POST FRIEND?
// createUser(req, res) {
// 	User.create(req.body)
// 		.then((users) => {
// 			return friends.findOneAndUpdate (
// 				{ _id: req.body.userId },
// 				{ $addToSet: { users: friendCount._id}},
// 				{ new: true }
// 			);
// 		//dbUserData
// 	}).then((users) => {
// 		res.json(users);
// 	})


