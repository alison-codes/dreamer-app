const mongoose = require('mongoose');
const moment = require('moment');

var castSchema = new mongoose.Schema({
	castMember: String,
}, {
		timestamps: true,
});

const dreamSchema = new mongoose.Schema({
	user_id: String,
	date: {
		type: Date,
		default:function() {
            return new Date(moment().add(0, 'years').format());},
	},
	dayOfWeek: {
		type: String,
		default: function() {
            return moment().format('dddd');},
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
		min: 0.25,
		max: 24,
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


