const Thought = require('../models/Thought');

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
      .select('-__v') //fieldname & __v: (versionKey) || the internal revision of the document
			.then((thoughts) => {
				res.json(thoughts);
			});
	},
}