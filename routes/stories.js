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

// locations stories

router.get('/locations', (req, res, next) => {
  Story.find()
		.then(storyFromDB => {

			res.json({stories:storyFromDB});
		})
		.catch(err => {
			console.log(err)
		})
})

// Details

/* 

router.get('/:id', (req,res, next)=> {
  const celebId = req.params.id;
  console.log(celebId);
  Celebrity.findById(celebId)
    .then(celebDetails => {
      res.render('celebrities/show', {details : celebDetails })
      console.log(celebDetails);
    })
    .catch(error => console.log('error while retrieving data from DB', error))
}) 

*/


module.exports = router;