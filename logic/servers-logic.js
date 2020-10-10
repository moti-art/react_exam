let usersDao = require("../Dao/servers-dao");
let ServerError = require("../errors/server-error");
let ErrorType = require("../errors/error-type");


async function get_servers() {
    return await usersDao.get_servers();
}

async function edit_status(status,id) {
    return await usersDao.edit_status(status,id);
}

async function sortByDate() {
    return await usersDao.sortByDate();
}



module.exports = {
    get_servers,
    edit_status,
    sortByDate
};





