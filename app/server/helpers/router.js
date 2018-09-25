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

  r.post('/', (req, res) => { // CREATE
    const newItem = req.body;
    collection
      .insertOne(newItem)
      .then(() => {
        // collection
        //   .find()
        //   .toArray()
        //   .then((info) => res.json(info))
        console.log('Item posted.')
      })
  });

  return r;
}

module.exports = router;
