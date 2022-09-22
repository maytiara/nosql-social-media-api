const Thought = require('../models/Thought');
const User = require('../models/User');

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
			.select("-__v") //fieldname & __v: (versionKey) || the internal revision of the document
			.then((dbThoughtdata) => {
				res.json(dbThoughtdata);
			});
	},

	// create a new thought & push the created thought using _id nested to thoughts array
	addThought(req, res) {
		Thought.create(req.body)
			.then((thoughts) => {
				return User.findOneAndUpdate( // this push the data of thoughts in users collection
					{ _id: req.body.userId },
					{ $addToSet: { thoughts: thoughts._id } }, // this operator replaces the value of the field
					{ upsert: true, new: true } // it updated the new insert value
				);
			})
			.then((thoughts) => {
				res.json(thoughts);
			});
	},
};