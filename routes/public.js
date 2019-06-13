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

// Wiki
router.get('/wiki', function(req, res) {
  res.render('wiki', {title: 'Wiki'});
});
router.get('/wiki/:wikiItem/', function(req, res) {
  var url = req.protocol + '://' + req.get('host') + req.originalUrl;
  if(req.originalUrl == '/wiki/library')
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
  else if(req.originalUrl == '/wiki/procul')
    res.render('wiki/procul',{title: 'Wiki | Procul',url: url});
  else if(req.originalUrl == '/wiki/bookmarks')
    res.render('wiki/bookmarks',{title: 'Wiki | Bookmarks',url: url});
  else if(req.originalUrl == '/wiki/goals')
    res.render('wiki/goals',{title: 'Wiki | Goals',url: url});
  else if(req.originalUrl == '/wiki/alchemist')
    res.render('wiki/alchemist',{title: 'Wiki | Alchemist',url: url});
  else if(req.originalUrl == '/wiki/velo')
    res.render('wiki/velo',{title: 'Wiki | Velo',url: url});
});

router.get('/systems/:systemItem', function(req, res) {
  var url = req.protocol + '://' + req.get('host') + req.originalUrl;
  if(req.originalUrl == '/systems/calendar')
    res.render('systems/calendar',{title: 'Wiki | Afiur',url: url});
});

// About
router.get('/self', function(req, res) {
  res.render('about', {title: 'Self'});
});

//Robots
router.get('/robots.txt', function(req, res) {
  res.type('text/plain');
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
