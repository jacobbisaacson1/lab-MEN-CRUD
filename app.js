const express = require('express')
const app = express()
const bodyParser = require('body-parser')

//const methodOverride = require('method-override')

require('./db/db')

app.use((req, res, next) => {
  console.log("\nI am custom middleware, every request passes through me");
  console.dir(req.body);
  next()
})

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))

const personController = require('./controllers/personController')
const person = require('./models/person')
app.use('/person', personController)

app.get('/', (req, res) => {
  res.render('home.ejs')
})









app.listen(3000, () => {
  console.log("Server running on port 3000");
})














