const express = require("express");
const { registerGroup, createMembersTable, createContributionsTable, createChamaGroupsTable } = require("../controllers/groups");

const groupRouter = express.Router();


groupRouter.post("/register", registerGroup);

module.exports = { groupRouter };
