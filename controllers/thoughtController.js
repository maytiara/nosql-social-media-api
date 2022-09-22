const Thought = require('../models/Thought');

module.exports = {
	//  get all thoughts
	getThoughts(req, res) {
		Thought.find({}).then((thoughts) => {
			res.json(thoughts);
		});
	},
}