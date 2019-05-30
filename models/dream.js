const mongoose = require('mongoose');


var castSchema = new mongoose.Schema({
	castMember: String,
}, {
		timestamps: true,
});

const dreamSchema = new mongoose.Schema({
	user_id: String,
	date: {
		type: Date,
		default: Date.now,
	},
	description: {
		type: String,
		min: 20,
		required: true,
	},
	score: Number,
	sentiment: String,
	hoursSlept: {
		type: Number,
		default: 8,
	},
	keyWords: [{
		type: String,
	}],
	cast: [castSchema],
}, {
		timestamps: true,
});

var Dream = mongoose.model('Dream', dreamSchema);

module.exports = Dream;


