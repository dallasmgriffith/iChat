// DEBUG
process.env.DEBUG = '*'

// Import Dependencies
const express = require('express')
const cors = require('cors')
const db = require('mongoose')


// MongoDB Setup
db.connect(`mongodb+srv://iChat-US:${process.env.mongo_key}@ichat.vnrj6.mongodb.net/?retryWrites=true&w=majority`)
db.set('debug', true)


// Server Setup
const app = express()
app.use(express.urlencoded())
app.use(express.json())
app.use(cors())

// Server Startup
app.get('/', (req, res) => {
	res.sendFile('web/index.html', { root: __dirname })
})

app.post('/api/account/login', (req, res) => {
	if (req.body['token']) {
		
	}
})

app.all('*', (req, res) => {
	res.status(404).sendFile('./web/error/404.html', { root: __dirname })
})

app.listen(80, () => {})