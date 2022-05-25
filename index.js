// DEBUG
process.env.DEBUG = '*'


// Import Dependencies
const Express = require('express')
const Database = require("@replit/database")


// DB Setup
const db = new Database()


// Server Setup
const app = Express()


// Server Startup
app.get('/api/:page/:mode', (req, res) => {
	// Run API
	const { params, query } = req
	
	switch (params.page) {
		case "accounts": 
			switch(params.mode) {
				case "login"
			}
	}
})

app.listen(80, () => {})