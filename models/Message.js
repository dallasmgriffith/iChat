const mongoose = require('mongoose')

module.exports = mongoose.model('Message', new mongoose.Schema({
	user: Object,
	content: String,
	sentDate: Date
}))