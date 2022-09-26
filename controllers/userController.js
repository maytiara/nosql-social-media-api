const User = require("../models/User");
const friend = require("../models/User");

module.exports = {
	//  get all users
	getUsers(req, res) {
		User.find({})
			.populate("thoughts") //fieldname
			.populate("friends") //fieldname
			.then((users) => {
				res.json(users);
			});
	},
	// get a single user by _id /api/users/ObjectId
	getSingleUser(req, res) {
		// the requested route parameter, calling the collection ID
		User.findOne({ _id: req.params.userId }) //check this added.users.$
			.populate("thoughts") //fieldname
			.populate("friends") //fieldname
			//.populate({ path: "friends", populate: { path: "friendCount" }})
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
			{ _id: req.params.usersId }, //filter
			{ $addToSet: { users: req.body } }, // this operator replaces the value of the field
			{ upsert: true, new: true } // it updated the new insert value
		).then((users) => {
			res.json(users);
		});
	},
	// remove user by _id
	deleteUser(req, res) {
		User.findOneAndDelete(
			{ users: req.params.usersId }, //filter
			{ $pull: { users: req.params.usersId } } // this $pull operator deletes the value of the field
		).then((users) => {
			res.json(users);
		});
	},

	// create new friend to user's friendlist
	// returns null and creates new users: ObjectId array //--
	createFriend(req, res) {
		User.findOneAndUpdate(
			{ _id: req.params.usersId },
			{ $push: { path: "friends", $addToSet: { friends: req.body } } },
			{ new: true }
		).then((users) => {
			res.json(users);
		});
	},
};