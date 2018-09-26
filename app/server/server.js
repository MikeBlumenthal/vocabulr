const express = require('express');
const server = express();
const parser = require('body-parser');
const path = require('path');
const router = require('./helpers/router.js');
const MongoClient = require('mongodb').MongoClient;

const publicPath = path.join(__dirname, '../client/public');
server.use(express.static(publicPath));

server.use(parser.json());

MongoClient.connect('mongodb://localhost:27017')
  .then( (client) => {
    const db = client.db('vocabulary');
    const collection = db.collection('questions');
    const collection2 = db.collection('history');
    const qRouter = router(collection);
    const hRouter = router(collection2);
    server.use('/api/questions', qRouter);
    server.use('/api/history', hRouter);
  })
  .catch((error) => {
    console.error('Failed to connect');
    console.error(error);
  });

server.listen(3000, () => {
  console.log('Listening on port 3000');
});
