var createError = require('http-errors'),
    express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    logger = require('morgan'),
    stylus = require('stylus');

var publicRouter = require('./routes/public'),
    privateRouter = require('./routes/private');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(stylus.middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    res.header('X-powered-by', 'Retejo (https://drisc.io/retejo');
  next();
});

app.use('/', publicRouter);
app.use('/writing', publicRouter);
app.use('/art', publicRouter);
app.use('/about', publicRouter);
app.use('/retejo', publicRouter);
app.use('/login', privateRouter);
app.use('/blog/new', privateRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
