var express = require('express'),
    url     = require('url');

var router = express.Router();

/*
  GET
*/

//  Index
router.get('/', function(req, res) {
  res.render('wiki', {
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
router.get('/wiki/:wikiItem/', function(req, res) {
  var url = req.protocol + '://' + req.get('host') + req.originalUrl;
  if(req.originalUrl == '/wiki/libsis')
    res.render('wiki/libsis',{title: 'Wiki | Reading List',url: url});
  else if(req.originalUrl == '/wiki/straal')
    res.render('wiki/straal',{title: 'Wiki | Straal',url: url});
  else if(req.originalUrl == '/wiki/humes')
    res.render('wiki/humes',{title: 'Wiki | Humes',url: url});
  else if(req.originalUrl == '/wiki/retejo')
    res.render('wiki/retejo',{title: 'Wiki | Retejo',url: url});
  else if(req.originalUrl == '/wiki/tools')
    res.render('wiki/tools',{title: 'Wiki | Tools',url: url});
  else if(req.originalUrl == '/wiki/sargas')
    res.render('wiki/sargas',{title: 'Wiki | Sargas',url: url});
  else if(req.originalUrl == '/wiki/paviderm')
    res.render('wiki/paviderm',{title: 'Wiki | Paviderm',url: url});
  else if(req.originalUrl == '/wiki/bookmarks')
    res.render('wiki/bookmarks',{title: 'Wiki | Bookmarks',url: url});
  else if(req.originalUrl == '/wiki/photography')
    res.render('wiki/photography',{title: 'Wiki | Photography',url: url});
});

router.get('/systems/:systemItem', function(req, res) {
  var url = req.protocol + '://' + req.get('host') + req.originalUrl;
  if(req.originalUrl == '/systems/calendar')
    res.render('systems/calendar',{title: 'Wiki | Afiur',url: url});
});

// About
router.get('/about', function(req, res) {
  res.render('about', {title: 'About'});
});

//Robots
router.get('/robots.txt', function(req, res) {
  res.type('text/plain')
  res.send("User-agent: *\nDisallow: ");
});

//Social Redirects
router.get('/:socal',function(req, res) {
  var url = req.protocol + '://' + req.get('host') + req.originalUrl;
  if(req.originalUrl == '/tw')
    res.status(301).redirect('https://twitter.com/driscio');
  else if(req.originalUrl == '/gh')
    res.status(301).redirect('https://github.com/drisc');
  else if(req.originalUrl == '/ig')
    res.status(301).redirect('https://instagram.com/_drisc_');
  else if(req.originalUrl == '/fv')
    res.status(301).redirect('https://merveilles.town/@drisc');
});

module.exports = router;
