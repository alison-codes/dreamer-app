var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  googleId: String,
  allCastMembers: [{
		type: String,
	}],
}, {
    timestamps: true
  });

module.exports = mongoose.model('User', userSchema)