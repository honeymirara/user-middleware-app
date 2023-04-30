const express = require('express');
const getAllUsers = require('../service/user.service')

const route = express.Router();

route.get('/', (req, res) => {
    const data = getAllUsers();
    res.send('hi');
});

module.exports = route;