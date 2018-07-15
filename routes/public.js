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
router.get('/art/:artItem', function(req, res) {
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
router.get('/writing/:writingItem', function(req, res) {
  res.render('wiki', {
    title: 'Writing',
  });
});

// Wiki
router.get('/wiki', function(req, res) {
  res.render('wiki', {title: 'Wiki'});
});
router.get('/wiki/:wikiItem', function(req, res) {
  res.render('wiki_template', {
    title: 'Wiki | ',
    body: 'Something'
  });
});

// About
router.get('/about', function(req, res) {
  res.render('about', {title: 'About'});
});

module.exports = router;
