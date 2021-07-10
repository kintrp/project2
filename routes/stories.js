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

// Display userstories in profile

  router.get('/stories', (req, res, next) => {
    Story.find()
      .then(storiesFromDB => {
        res.render('stories', { storyList: storiesFromDB });
      })
      .catch(err => {
        console.log(err)
      })
  });


// get coordinates from DB as JSON
  
  router.get('/markers', (req, res, next) => {
    Story.find()
      .then(storiesFromDB => {

        res.json({stories:storiesFromDB});
      })
      .catch(err => {
        console.log(err)
      })
  });

// show authors stories in profile

router.get('/profile', (req, res, next) => {
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

// delete a story
 
router.post('/stories/:id/delete', (req, res, next) => {
	const storyId = req.params.id;
  console.log(req.params.id);
	Story.findByIdAndDelete(storyId)
		.then(() => {
			res.redirect('/profile');
		})
		.catch(err => {
			console.log(err);
		})
}); 

//edit the story

router.get('/stories/:id/edit', (req, res, next) => {
  Story.findById(req.params.id)
    .then(story => {
      res.render('edit', {story});
    })
    .catch(err => {
      next(err);
    });
});

router.post('/stories/:id/edit', (req, res, next) => {
	const storyId = req.params.id;
  const { title, genre, city, author, story } = req.body;
  console.log(req.params.id);
	Story.findByIdAndUpdate(storyId, { title, genre, city, author, story }

  )
		.then(() => {
			res.redirect('/profile');
		})
		.catch(err => {
			console.log(err);
		})
}); 


module.exports = router;