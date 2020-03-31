const mongoose = require('mongoose')


const peopleSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	location: {
		type: String,
		required: true
	},
	age: {
		type: Number,
		required: true
	}
})

const People = mongoose.model('People', peopleSchema)





module.exports = People