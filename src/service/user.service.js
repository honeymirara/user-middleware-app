const fs = require('fs');
const path = ('./storage/storage.json');



function getAllUsers() {
    const array = JSON.parse(fs.readFileSync(path));
    return array
}

function createUser(name, surname, email, pwd) {
    const array = JSON.parse(fs.readFileSync(path));
    const obj = {
        name: name,
        surname: surname,
        email: email,
        pwd: pwd
    }
    array.push(obj);
    fs.writeFileSync(path, JSON.stringify(array));
    return array;
}


function getUserById(id) {
    const array = JSON.parse(fs.readFileSync(path));
    const filtered = array.filter(el => el.id == id);
    return filtered;
};

function updateById(id, name, surname, email, pwd) {
    const array = JSON.parse(fs.readFileSync(path));
    const filterById = array.filter(el => el.id != id);

    if (array.length == filterById.length) throw new Error("id not found");

    const obj = {
        id,
        name,
        surname,
        email,
        pwd
    };

    filterById.push(obj);
    fs.writeFileSync(path, JSON.stringify(filterById));
    return filterById;
};


module.exports = { getAllUsers, getUserById, createUser, updateById };