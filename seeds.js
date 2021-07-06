const mongoose = require('mongoose');

const Story = require('./models/Story.model');

mongoose.connect('mongodb://localhost/project2', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

const story = [
	{
		title: "Abebe Bikila-Roma 1960",
		body:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		duration: 5,
		author: "Philman"
	},

	{
		title: "Carvajal Cuban Legend",
		body:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		duration: 5,
		author: "Matt"
	}
]

Story.insertMany(story)
	.then(story => {
		console.log(`Success! Added ${story.length} story to the database`)
		mongoose.connection.close();
	})
	.catch(err => {
		console.log(err);
	})

const { Schema, model } = require("mongoose");