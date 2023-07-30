const { db } = require("../config/db");
const bcrypt = require("bcrypt");

const registerMember = (req, res) => {
  const { fullname, group_id, phone_no } = req.body;

  const groupId = Number(group_id);

  const query = "SELECT * FROM members WHERE phone_no = ? OR fullname = ?";

  db.query(query, [phone_no, fullname], (err, data) => {
    if (err) {
      res.status(500).json({ message: "Internal 1 error occurred!" });
    } else if (data.length) {
      res.status(409).json({ message: "Member already exists!" });
    } else {
      //Hash the password and create a user
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(phone_no, salt);

      const query =
        "INSERT INTO members(`fullname`,`phone_no`,`password`,`group_id`) VALUES (?)";

      const values = [fullname, phone_no, hash, groupId];

      db.query(query, [values], (err, data) => {
        if (err) {
          console.log(err);
          res.status(500).json({ message: "Internal 2 error occurred!" });
        }
        res.status(200).json(data);
      });
    }
  });
};

const LoginMember = (req, res) => {};
const getGroupMembers = (req, res) => {};
const getGroupMember = (req, res) => {};
const getGroupManagement = (req, res) => {};

module.exports = {
  registerMember,
  LoginMember,
  getGroupMember,
  getGroupMembers,
  getGroupManagement,
};
