const express = require('express')
const router = express.Router()
const Person = require('../models/person.js')

router.get('/', (req, res,) => {
  	res.render('home.ejs')
})

router.get('/new', (req, res) => {
	res.render('new.ejs')	
})

router.post('/', (req, res, next) => {
	console.log('\nhere is req.body -- added by the body-parser');
	console.log(req.body);
	res.send('post route')

	const personToAdd = {
		name: req.body.name,
		location: req.body.location,
		age: req.body.age
	}
	
	Person.create(personToAdd, (err, createdPerson) => {
		if(err) {
			next(err)
		} else {
			console.log('\n here is the person we created');
			console.dir(createdPerson);
			res.redirect('/')
		}
	})
})


module.exports = router