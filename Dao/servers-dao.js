let connection = require("./connection_wrapper");
let ErrorType = require("../errors/error-type");
let ServerError = require("../errors/server-error")


async function get_servers() {
    let sql = "select * from servers";
    return await connection.execute(sql);
}

async function sortByDate() {
    let sql = "select * from servers order by date_created DESC";
    return await connection.execute(sql);
}

async function edit_status(status,id) {
    let sql = "UPDATE servers SET status=? WHERE id = ?";
    let parameters=[status,id]
    await connection.executeWithParameters(sql,parameters);
}
module.exports = {
    get_servers,
    edit_status,
    sortByDate
   
};