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
    console.log(req.params.id);
    collection
      .find({ _id: ObjectID(id) })
      .toArray()
      .then((info) => res.json(info))
  });

  r.post('/', (req, res) => { // CREATE
    const newQuestion = req.body;
    collection
      .insertOne(newQuestion)
      .then(() => {
        // collection
        //   .find()
        //   .toArray()
        //   .then((info) => res.json(info))
        console.log('New question added.')
      })
  });

  return r;
}

module.exports = router;
