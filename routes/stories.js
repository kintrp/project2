const express = require('express');
const router = express.Router();
const User = require('../models/User.model');
const Story = require('../models/Story.model');

// render profile
// add story 

router.get('/profile', (req, res, next) => {
	res.render('profile', {user:req.session.user});
});

router.post('/profile', (req, res, next) => {
    const {title, story, genre, city} = req.body;
    console.log(req.session.user);
    const author = req.session.user.username;
    Story.create({title, story, genre, city, author}).then(()=>{
    res.redirect('/stories')  
    })
    .catch(err=>{
      next(err);
  });
  });

router.get('/stories', (req, res, next) => {
	Story.find()
		.then(storyFromDB => {

			res.render('stories', { storyList: storyFromDB });
		})
		.catch(err => {
			console.log(err)
		})
});


module.exports = router;