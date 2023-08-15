const { db } = require("../config/db");

function createChamaGroupsTable() {
  const query = `
    CREATE TABLE IF NOT EXISTS chamaa_groups(
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
    CREATE TABLE IF NOT EXISTS members(
      member_id INT AUTO_INCREMENT,
      fullname VARCHAR(255),
      phone_no VARCHAR(100),
      password VARCHAR(255),
      group_id INT,
      PRIMARY KEY(member_id),
      isDefaultPass TINYINT DEFAULT 1,
      isOfficial TINYINT DEFAULT 0,
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
    CREATE TABLE IF NOT EXISTS contributions(
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


const registerGroup = async (req, res) => {
  const { name, county, constituency, ward, village } = req.body;
  //CHECK EXISTING GROUP
  const query = "SELECT * FROM `chamaa_groups` WHERE group_name = ?";

  db.query(query, [name], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length)
      return res.status(409).json({ message: "Group already exists!" });

    const query =
      "INSERT INTO `chamaa_groups`(`group_name`,`county`,`constituency`, `ward`, `village`) VALUES (?)";
    const values = [name, county, constituency, ward, village];

    db.query(query, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json({ message: "Group has been created." });
    });
  });
};

module.exports = { registerGroup, createChamaGroupsTable, createMembersTable, createContributionsTable };
