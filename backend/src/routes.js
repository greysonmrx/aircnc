const { Router } = require("express");

const SessionController = require("./controllers/SessionController");

const routes = Router();

routes.post("/sessions", SessionController.store);

module.exports = routes;
