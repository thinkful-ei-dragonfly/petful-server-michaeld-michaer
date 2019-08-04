const express = require('express');
const catRouter = express.Router();

const {catsData} = require('./cat-service');

catRouter
  .route('/')
  .get((req, res) => {
    return res.json(catsData);
  });
 
catRouter // DELETE from Queue, next in line now first
  .route('/delete')
  .delete((req, res) => {
    catsData.dequeue();
    return res.json(catsData);
  });

module.exports = catRouter;


