const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const router = function(collection) {
  const r = express.Router();

  r.get('/', (req, res) => {
    collection
      .find()
      .toArray()
      .then((info) => res.json(info))
  });

  return r;
}

module.exports = router;
