var express = require('express');

var router = express.Router();

/*
  GET
*/

//  Index
router.get('/', function(req, res) {
  res.render('index', {
    title: 'Retejo'
  });
});
// Art
router.get('/art', function(req, res) {
  res.render('art', {
    title: 'Art'
  });
});
// Writing
router.get('/writing', function(req, res) {
    res.render('writing', {
        title: 'Writing',
    });
});

// About
router.get('/about', function(req, res) {
  res.render('about', {title: 'About'})
});

// Login
router.get('/login', function(req, res) {
  res.render('login', { title: 'Login'});
});

module.exports = router;
