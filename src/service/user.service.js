const fs = require('fs');
const path = './storage/storage.json';

function getAllUsers() {
    const array = JSON.parse(fs.readFileSync(path));
    if (!array.length) throw new Error('array is empty');

    return array;
}

function createUser(name, surname, email, pwd) {
    const array = JSON.parse(fs.readFileSync(path));

    const filtered = array.filter(el => el.email == email);
    if (filtered.length) throw new Error('this email already exist');

    array.push({ id: array.length + 1, name, surname, email, pwd });

    fs.writeFileSync(path, JSON.stringify(array));
    return array;
}

function getUserById(id) {
    const array = JSON.parse(fs.readFileSync(path));

    if (!array.length) throw new Error('Not found user');

    const filtered = array.filter(el => el.id == id);
    return filtered;
}

function updateById(id, name, surname, email, pwd) {
    const array = JSON.parse(fs.readFileSync(path));
    const filterById = array.filter(el => el.id != id);

    if (array.length == filterById.length) throw new Error('id not found');

    filterById.push({
        id,
        name,
        surname,
        email,
        pwd,
    });

    fs.writeFileSync(path, JSON.stringify(filterById));
    return filterById;
}

function deleteUser(id) {
    const arr = JSON.parse(fs.readFileSync(path));

    const filtered = arr.filter(el => el.id != id);

    fs.writeFileSync(path, JSON.stringify(filtered));
    return filtered;
}


module.exports = { getAllUsers, getUserById, createUser, updateById, deleteUser };
