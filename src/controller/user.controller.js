const express = require('express');
const { getAllUsers, getUserById, createUser } = require('../service/user.service');

const route = express.Router();

route.get('/', (req, res) => {
    const data = getAllUsers();
    res.send(data);
});

route.get('/:id', (req, res) => {
    const data = getUserById()
    res.send(data);
})

route.post('/', (req, res) => {
    const { name, surname, email, pwd } = req.body;
    const data = createUser(name, surname, email, pwd);
    res.send(data);
})



module.exports = route;