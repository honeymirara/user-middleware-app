const fs = require('fs');
const path = ('./storage/storage.json');



function getAllUsers() {
    const array = JSON.parse(fs.readFileSync(path));
}

module.exports ={getAllUsers};