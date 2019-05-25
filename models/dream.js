const mongoose = require('mongoose');

const dreamSchema = new mongoose.Schema({
	user_id: String,
	date: {
		type: Number,
		// default: () => Date.now() + (364 * 24 * 60 * 60 * 1000),
	},
    description: {
		type: String,
		required: true,
	  },
    score: Number,
	sentiment: String,
	hoursSlept: Number,
})

var Dream = mongoose.model('Dream', dreamSchema);

module.exports = Dream;
