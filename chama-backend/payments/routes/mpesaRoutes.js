const express = require("express");
const { stkPush, b2c } = require("../controllers/mpesaControllers");
const { token } = require("../controllers/mpesaControllers");
const { mpesaPassword } = require("../controllers/mpesaControllers");

const mpesaRouter = express.Router();

mpesaRouter.get("/password", mpesaPassword);
mpesaRouter.get("/token", token);
mpesaRouter.post("/stk/push", token, stkPush);
mpesaRouter.post("/withdraw", token, b2c);

module.exports = { mpesaRouter };
