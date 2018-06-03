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

// Retejo
router.get('/retejo', function(req, res, next) {
  res.render('tidbits/post', {
    title: 'Retejo',
    body: 'Retejo | Website built on Node.js'
  })
});
module.exports = router;
