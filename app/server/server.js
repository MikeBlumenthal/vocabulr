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
  const db
})
