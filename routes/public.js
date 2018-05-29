var express = require('express');
var router = express.Router();

/*
 GET Reqs
*/

//  Index
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Retejo'});
});

// Blog
router.get('/blog', function(req, res, next) {
  res.render('blog', {title: 'Blog'});
});

// About
router.get('/about', function(req, res, next) {
  res.render('about', {title: 'About'})
});

module.exports = router;
