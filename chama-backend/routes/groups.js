const express = require("express");
const { db } = require("../config/db");
const { registerGroup } = require("../controllers/groups");

const groupRouter = express.Router();

// CREATE DB TABLES
groupRouter.post("/create-tables", (req, res) => {
  db.query(
    `CREATE TABLE groups(
    group_id INT AUTO_INCREMENT,
    group_name VARCHAR(150),
    county VARCHAR(70),
    constituency VARCHAR(200),
    ward VARCHAR(200),
    village VARCHAR(200),
    PRIMARY KEY(group_id)
  )`
  );

  // Create the 'members' table within the new database
  db.query(
    `CREATE TABLE members(
            member_id INT AUTO_INCREMENT,
            fullname VARCHAR(255),
            phone_no VARCHAR(100),
            password VARCHAR(255),
            group_id INT,
            PRIMARY KEY(member_id),
            FOREIGN KEY(group_id) REFERENCES groups(group_id)
          )`
  );

  // Create the 'contributions' table within the new database
  db.query(
    `CREATE TABLE contributions(
        contribution_id INT AUTO_INCREMENT,
        member_id INT,
        amount INT,
        date DATE,
        PRIMARY KEY(contribution_id),
        FOREIGN KEY(member_id) REFERENCES members(member_id)
      )`
  );
  res.status(200).json({ message: "Tables created!" });
});

groupRouter.post("/register", registerGroup);

module.exports = { groupRouter };
