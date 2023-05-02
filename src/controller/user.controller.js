const express = require('express');
const { getAllUsers, getUserById } = require('../service/user.service');

const route = express.Router();

route.get('/', (req, res) => {
    const data = getAllUsers();
    res.send(data);
});

route.get('/:id', (req, res) => {
    const data = getUserById()
    res.send(data);
})



module.exports = route;