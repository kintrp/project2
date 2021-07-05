const router = require("express").Router();
const User = require('../models/User.model');
const bcrypt = require('bcrypt');

router.get('/signup', (req, res, next) => {
	res.render('signup');
});

router.get('/login', (req, res, next) => {
	res.render('login');
});

// Signup

router.post('/signup', (req, res)=> {
	console.log('Hello World', req.body);
	const {username, password} = req.body;

	if (password.length <8) {
		res.render('signup', { message: 'Minimum password length: 8 chars' });
		return;
	}
	if (username.length=== 0) {
		res.render('signup', {message: 'Username cannot be empty'});
		return;
	}

	 User.findOne({ username: username })
		.then(userFromDB => {
			console.log('userFromDB', userFromDB);
			if (userFromDB !== null) {
				res.render('signup', {message: 'Username has already been taken.'})
				return;
			
			} else {
				const salt = bcrypt.genSaltSync();
				const hash = bcrypt.hashSync(password,salt);
				console.log('hash',hash);
				User.create({username: username, password: hash})
					.then(createdUser => {
						console.log('createdUser', createdUser);
						res.redirect('/login');	
					})
					.catch(err=>{
						next(err);
					})
			}
		})
		.catch(err=>console.log(err)); 
})

module.exports = router;
