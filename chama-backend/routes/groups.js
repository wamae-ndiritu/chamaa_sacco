const express = require("express");
const { db } = require("../config/db");
const { registerGroup } = require("../controllers/groups");

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

function createChamaGroupsTable() {
  const query = `
    CREATE TABLE chamaa_groups(
      group_id INT AUTO_INCREMENT,
      group_name VARCHAR(150),
      county VARCHAR(70),
      constituency VARCHAR(200),
      ward VARCHAR(200),
      village VARCHAR(200),
      PRIMARY KEY(group_id)
    )`;

  return new Promise((resolve, reject) => {
    db.query(query, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

function createMembersTable() {
  const query = `
    CREATE TABLE members(
      member_id INT AUTO_INCREMENT,
      fullname VARCHAR(255),
      phone_no VARCHAR(100),
      password VARCHAR(255),
      group_id INT,
      PRIMARY KEY(member_id),
      FOREIGN KEY(group_id) REFERENCES chamaa_groups(group_id)
    )`;

  return new Promise((resolve, reject) => {
    db.query(query, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

function createContributionsTable() {
  const query = `
    CREATE TABLE contributions(
      contribution_id INT AUTO_INCREMENT,
      member_id INT,
      amount INT,
      date DATE,
      PRIMARY KEY(contribution_id),
      FOREIGN KEY(member_id) REFERENCES members(member_id)
    )`;

  return new Promise((resolve, reject) => {
    db.query(query, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

groupRouter.post("/register", registerGroup);

module.exports = { groupRouter };
