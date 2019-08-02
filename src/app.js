require('dotenv').config();
const express = require('express');
const { CLIENT_ORIGIN } = require('./config');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const dogRouter = require('./dogs/DogRouter');
const catRouter = require('./cats/CatRouter');

const app = express();
const morganOption = (process.env.NODE_ENV === 'production') // For server side logs
  ? 'tiny'
  : 'common';
app.use(cors({ origin: CLIENT_ORIGIN }));
app.use(helmet());
app.use(morgan(morganOption));
app.use(express.json());


app.use('/api/cat', catRouter);
app.use('/api/dog', dogRouter);


// Catch-all 404
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Catch-all Error handler
// Add NODE_ENV check to prevent stacktrace leak
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : {}
  });
});

module.exports = app;
