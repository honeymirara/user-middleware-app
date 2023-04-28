const express = require('express');
const user = require('./controller/user.controller')
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use('/user', user)

app.get('/', (req, res) => {
    res.send('ok')
});

app.use((err, req, res, next) => {
    res.send(err.message);
})

module.exports = app;