const express = require('express');
const user = require('./controller/user.controller');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use('/user', user);

app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

module.exports = app;
