const mongoose = require('mongoose');

const dreamSchema = new mongoose.Schema({
	user_id: String,
	date: Date,
    description: String,
    score: Number,
	sentiment: String,
})

var Dream = mongoose.model('Dream', dreamSchema);

module.exports = Dream;
