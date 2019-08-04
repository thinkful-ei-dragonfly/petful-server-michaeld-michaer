const express = require('express');
const dogRouter = express.Router();

const { dogsData } = require('./dog-service');

dogRouter
  .route('/')
  .get((req, res) => {
    return res.json(dogsData);
  });

dogRouter // DELETE from Queue, next in line now first
  .route('/delete')
  .delete((req, res) => {
    dogsData.dequeue();
    return res.json(dogsData);
  });
module.exports = dogRouter;