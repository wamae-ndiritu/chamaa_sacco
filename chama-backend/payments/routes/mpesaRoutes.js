const express = require("express");
const { stkPush } = require("../controllers/mpesaControllers");
const { token } = require("../controllers/mpesaControllers");
const { mpesaPassword } = require("../controllers/mpesaControllers");

const mpesaRouter = express.Router();

mpesaRouter.get("/password", mpesaPassword);
mpesaRouter.get("/token", token);
mpesaRouter.post("/stk/push", token, stkPush);

module.exports = { mpesaRouter };
