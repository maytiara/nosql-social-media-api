const Thought = require("../models/Thought");
const User = require("../models/User");
const reactionSchema = require("../models/Thought");

module.exports = {
	//  get all thoughts
	getThoughts(req, res) {
		Thought.find({}).then((thoughts) => {
			res.json(thoughts);
		});
	},

	// get a single thought by _id /api/thoughts/ObjectId
	getSingleThought(req, res) {
		// the requested route parameter, calling the collection ID
		Thought.findOne({ _id: req.params.thoughtsId }) //finding the thoughts:ObjectId
			.then((thoughts) => {
				res.json(thoughts);
			});
	},

	// create a new thought & push the created thought using _id nested to thoughts array
	addThought(req, res) {
		Thought.create(req.body)
			.then((thoughts) => {
				return User.findOneAndUpdate(
					// this push the data of thoughts in users collection
					{ _id: req.body.userId }, //filter
					{ $addToSet: { thoughts: thoughts._id } }, // this operator replaces the value of the field
					{ upsert: true, new: true } // it updated the new insert value
				);
			})
			.then((thoughts) => {
				res.json(thoughts);
			});
	},

	// Update a thought by its _id
	updateThought(req, res) {
		Thought.findOneAndUpdate(
			// it matches the filter from the document body
			{ _id: req.params.thoughtsId }, //filter
			{ $set: req.body }, // this replace a specific field using the new value
			{ runValidators: true, new: true } // this works for nested fields to validate the required properties
		).then((thoughts) => {
			// promise wrapper
			res.json(thoughts);
		});
	},

	// remove a thought by its _id
	deleteThought(req, res) {
		Thought.findOneAndRemove({ _id: req.params.thoughtsId }).then((thoughts) => {
			//filter
			if (!thoughts) {
				// 1st condition | if thoughtsId = false
				res.status(404).json({ message: "Please try again!" }); // it will returns 404
			} else if (thoughts) {
				// 2nd condition | thoughtsId = true
				User.findOneAndUpdate(
					// this will delete the user ObjectId || Need to clarify about this statement
					{ thoughts: req.params.thoughtsId },
					{ $pull: { thoughts: req.params.thoughtsId } },
					{ new: true }
				).then((thoughts) => {
					// promise wrapper
					res.json(thoughts);
				});
			}
		});
	},

	// get reactions from the parent Thoughts field
	getReactions(req, res) {
		reactionSchema
			.find({})
			.populate("reactions")
			.then((thoughts) => {
				res.json(thoughts);
			});
	},

	// create reaction to stored in reactions arrays nested in Thoughts array field
	// pull and remove a reaction by the reactionId value
	// insomnia: unable to delete //--
	removeThoughtReaction(req, res) {
		Thought.findOneAndDelete(
			{ users: req.params.usersId }, //filter
			{ $pull: { users: req.params.usersId } } // this $pull operator deletes the value of the field
		).then((users) => {
			res.json(users);
		});
	},
};