const router = require("express").Router();
const Story = require("../models/Story.model");
// ../ to go up one folder

const Story = require('../models/Story.model');

router.get('/stories', (req, res, next) => {
	// get all the books	
	Story.find()

		.then(storyFromDB => {
			// render a view books
			//console.log(books)
			res.render('stories', { storyList: storyFromDB });
		})
		.catch(err => {
			console.log(err)
		})
});
