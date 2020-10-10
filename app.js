const express = require("express");
const serversController = require("./controllers/servers-controller");
const errorHandler = require("./errors/error-handler");
const server = express();
const cors = require("cors");

server.use(cors({ origin: "http://localhost:3000", credentials: true }));
// Extract the JSON from the body and create request.body object containing it: 
server.use(express.json());

server.use("/servers", serversController);
server.use(errorHandler);

server.listen(3001, () => console.log("Listening on http://localhost:3001"));



