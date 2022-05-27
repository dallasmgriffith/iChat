// Import Schemas
const { Schema } = require('mongoose')

// Load Modules
const Account = new Schema({
	username: { type: String, default: "User" },
	id: { type: Number, default: 0},
	token: { type: String, default: 0 }
})

// Export Modules
module.exports = {
	
}