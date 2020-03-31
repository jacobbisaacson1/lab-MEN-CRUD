const express = require('express')
const app = express()

// const bodyParser = require('body-parser')
// const methodOverride = require('method-override')

app.get('/', (req, res) => {
  	res.render('home.ejs')
})

app.get('/new', (req, res) => {
	res.render('new.ejs')	
})



app.listen(3000, () => {
  console.log("Server running on port 3000");
})