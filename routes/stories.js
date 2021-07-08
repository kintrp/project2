const express = require('express');
const router = express.Router();
const User = require('../models/User.model');
const Story = require('../models/Story.model');

// render profile hbs in profile url

/* 
router.get('/profile', (req, res, next) => {
res.render('profile', {user:req.session.user});
}); 
*/

// Create stories by profile

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

// Show stories in stories url

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
      postalCodes = storyFromDB.map(e=>e.city)
        console.log(postalCodes);
			res.json({stories:postalCodes});
		})
		.catch(err => {
			console.log(err)
		})
})

// show stories in profile

router.get('/profile', (req, res, next) => {
    console.log('Hello');
Story.find({author: req.session.user.username})
  .then(storiesFromDB => {
    console.log(storiesFromDB, req.session.user.username);
  res.render('profile', { storyList: storiesFromDB, user:req.session.user });
  })
  })

// details

router.get('/stories/:id', (req,res, next)=> {
  const storyId = req.params.id;
  console.log(storyId);
  Story.findById(storyId)
    .then(storyDetails => {
      res.render('details', {details : storyDetails })
      console.log(storyDetails);
    })
    .catch(error => console.log('error while retrieving data from DB', error))
}) 

// delete the stories

router.post('/stories/:id/delete', (req, res, next) => {
	const storyId = req.params.id;
	// delete this story	
	Story.findByIdAndDelete(storyId)
		.then(() => {
			// redirect to the stories list
			res.redirect('/stories');
		})
		.catch(err => {
			console.log(err);
		})
}); 

//editing stories

/* router.get('/stories:id/edit', (req, res, next) => {
  Story.findOneAndUpdate(req.params.id)
    .then(stories => {
      res.render('/profile', {stories});
    })
    .catch(err => {
      next(err);
    });
}); */

router.post('/:id/edit', (req, res) => {
  const {id} = req.params;
  const {title, story, genre, city} = req.body;

  Story.findByIdAndUpdate(id, {title, story, genre, city}, {new: true})
  .then(updatedStory =>res.redirect('/edit'))
  .catch(error => next(error));
});


module.exports = router;

