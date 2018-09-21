const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const router = function(collection) {
  const r = express.Router();

  r.get('/', (req, res) => { // INDEX
    collection
      .find()
      .toArray()
      .then((info) => res.json(info))
  });

  r.get('/:id', (req, res) => { // SHOW
    const id = req.params.id;
    collection
      .find({ _id: ObjectID(id) })
      .toArray()
      .then((info) => res.json(info))
  });

  return r;
}

module.exports = router;
