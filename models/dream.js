const mongoose = require('mongoose');

const dreamSchema = new mongoose.Schema({
	user_id: String,
	date: {
		type: Date,
		default: Date.now,
	},
	description: {
		type: String,
		min: [20, 'Description too short'],
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
	}]
}, {
	timestamps: true,
});

var Dream = mongoose.model('Dream', dreamSchema);

module.exports = Dream;


