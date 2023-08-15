const express = require("express");
const { db } = require("../config/db");
const { registerGroup, createMembersTable, createContributionsTable, createChamaGroupsTable } = require("../controllers/groups");

const groupRouter = express.Router();

// CREATE DB TABLES
groupRouter.post("/create-tables", (req, res) => {
  createChamaGroupsTable()
    .then(() => createMembersTable())
    .then(() => createContributionsTable())
    .then(() => {
      res.status(200).json({ message: "Tables created!" });
    })
    .catch(error => {
      console.error("Error creating tables:", error);
      res.status(500).json({ message: "Error creating tables" });
    });
});

groupRouter.post("/register", registerGroup);

module.exports = { groupRouter };
