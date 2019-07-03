var express      = require('express'),
    http         = require('http'),
    path         = require('path'),
    logger       = require('morgan'),
    stylus       = require('stylus'),
    httpError    = require('http-errors'),
    errorHandler = require('errorhandler'),
    bodyParser   = require('body-parser'),
    cookieParser = require('cookie-parser');

var publicRouter  = require('./routes/public'),
    privateRouter = require('./routes/private');

var retejo = express();

// App config
retejo.set('port', process.env.PORT || 3000);
retejo.use(logger('dev'));
retejo.use(express.json());
retejo.use(bodyParser.urlencoded({ extended: true }));
retejo.use(cookieParser());
retejo.use(stylus.middleware(path.join(__dirname, 'public')));
retejo.use(express.static(path.join(__dirname, 'public')));

if ('development' == retejo.get('env')) {
    retejo.use(errorHandler());
}

// Public Routes
retejo.get('/', publicRouter);
retejo.get('/:section', publicRouter);
retejo.get('/:section/:sectionItem', publicRouter);
retejo.get('/about', publicRouter);

// Private Routes
retejo.get('/login', privateRouter);

// Page Renderer
retejo.set('views', path.join(__dirname, 'views'));
retejo.set('view engine', 'pug');

// Catch httpErrors and forward to renderer
retejo.use(function (res, req, next) {
    next(httpError(404));
});

retejo.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = err;
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
    


// Start HTTP server
http.createServer(retejo).listen(retejo.get('port'), function () {
    console.log('Retejo server listening on port ' + retejo.get('port'));
});

module.exports = retejo;
