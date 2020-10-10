let usersLogic = require("../logic/servers-logic");
const express = require("express");

const router = express.Router();


// POST http://localhost:3000/users/login
router.get("/", async (request, response, next) => {

    try {
        let get = await usersLogic.get_servers();
        return response.json(get);
    }
    catch (error) {
        return next(error);
    }
});

router.get("/sort", async (request, response, next) => {

    try {
        let sort = await usersLogic.sortByDate();
        return response.json(sort);
    }
    catch (error) {
        return next(error);
    }
});

router.put("/", async (request, response, next) => {
    const data = request.body

    try {
        let edit = await usersLogic.edit_status(data.status,data.id);
         response.json(edit);
    }
    catch (error) {
        return next(error);
    }
});



module.exports = router;