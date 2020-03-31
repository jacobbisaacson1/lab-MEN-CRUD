const express = require('express')
const app = express()

const bodyParser = require('body-parser')
// const methodOverride = require('method-override')



app.use((req, res, next) => {
  console.log("\nI am custom middleware, every request passes through me");
  next()
})

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))

// app.use(methodOverride('_method'))

app.get('/', (req, res) => {
  	res.render('home.ejs')
})

app.get('/new', (req, res) => {
	res.render('new.ejs')	
})

app.post('/', (req, res) => {
	console.log('\nhere is req.body -- added by the body-parser');
	console.log(req.body);

	const create = {
		
	}
})











app.listen(3000, () => {
  console.log("Server running on port 3000");
})