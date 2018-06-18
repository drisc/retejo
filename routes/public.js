var express = require('express');
var router = express.Router();

/*
  GET
*/

//  Index
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Retejo'
  });
});
// Art
router.get('/art', function(req, res, next) {
  res.render('art', {
    title: 'Art'
  });
});
// Writing
router.get('/writing', function(req, res, next) {
  res.render('writing', {
    title: 'Writing'
  });
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
