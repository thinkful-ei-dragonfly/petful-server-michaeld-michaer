require('dotenv').config();
const express = require('express');
const { CLIENT_ORIGIN } = require('./config');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const app = express();

const morganOption = (process.env.NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(cors({ origin: CLIENT_ORIGIN }));
app.use(helmet());
app.use(morgan(morganOption))
app.use(express.json());

const petRouter = express.Router();

petRouter.route('/api/cat').get((req, res) => {
  res.json({
    imageURL:
      'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
    imageDescription:
      'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street'
  });
});

petRouter.route('/api/dog').get((req, res) => {
  res.json({
    imageURL:
      'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription:
      'A smiling golden-brown golden retriever listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'
  });
});

app.use(petRouter);

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
