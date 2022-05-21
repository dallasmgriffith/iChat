// DEBUG
process.env.DEBUG = '*'


// Import Dependencies
const express = require('express')
const db = require('mongoose')


// MongoDB Setup
const Schema = db.Schema
db.connect(`mongodb+srv://iChat-US:${process.env.mongoPassKey}@ichat.vnrj6.mongodb.net/?retryWrites=true&w=majority`)


//MongoDB Model Import
const User = require('./models/User')
const Message = require('./models/Message')


// Server Setup
const app = express()


// Server Startup
app.get('/api', (req, res) => {
	// Run API
})

app.listen(80, () => {})