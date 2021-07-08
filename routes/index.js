const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.redirect("/stories");
});

// middleware: checkin wether user is logged in
const loginCheck = () => {
  return (req, res, next) => {
    if (req.session.user) {
      next();  
    } else {
      res.redirect('/login');
    }
  }
}

/* 
router.get('/profile', loginCheck(), (req, res, next) => {
  console.log('this is the cookie: ', req.cookies)
  res.cookie('myCookie', 'hello world');
  res.clearCookie('myCookie');
  const loggedInUser = req.session.user
  res.render('profile', { user: loggedInUser });
}); 
*/

module.exports = router;