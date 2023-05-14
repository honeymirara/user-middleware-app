const express = require('express');
const { getAllUsers, getUserById, createUser, updateById, deleteUser } = require('../service/user.service');
const { isValidUserData, isValidUserId } = require('../helper/validation');

const route = express.Router();

route.get('/', (req, res) => {
  try {
    const data = getAllUsers();
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

route.get('/:id', isValidUserId, (req, res) => {
  try {
    const { id } = req.params;
    const data = getUserById(id);
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

route.post('/', isValidUserData, (req, res) => {
  try {
    const { name, surname, email, pwd } = req.body;
    const data = createUser(name, surname, email, pwd);
    res.status(201).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

route.put('/:id', isValidUserData, isValidUserId, (req, res) => {
  try {
    const { id } = req.params;
    const { name, surname, email, pwd } = req.body;
    const data = updateById(id, name, surname, email, pwd);
    res.send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

route.delete('/:id', isValidUserId, (req, res) => {
  try {
    const { id } = req.params;
    const data = deleteUser(id);
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = route;
