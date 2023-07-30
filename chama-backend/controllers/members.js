const { db } = require("../config/db");
const bcrypt = require("bcrypt");
const { generateToken } = require("../token");

const registerMember = (req, res) => {
  const { fullname, group_id, phone_no } = req.body;

  const groupId = Number(group_id);

  const query = "SELECT * FROM members WHERE phone_no = ? OR fullname = ?";

  db.query(query, [phone_no, fullname], (err, data) => {
    if (err) {
      res.status(500).json({ message: "Internal error occurred!" });
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
          res.status(500).json({ message: "Internal error occurred!" });
        }
        res.status(200).json(data);
      });
    }
  });
};

const LoginMember = (req, res) => {
  const { phone_no, group_name, password } = req.body;
  // check group existence
  const query = "SELECT * FROM groups WHERE group_name = ?";

  db.query(query, [group_name], (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Internal error occurred!" });
    }
    if (data.length) {
      // match user with group
      const query = "SELECT * FROM members WHERE phone_no = ? AND group_id = ?";
      db.query(query, [phone_no, data[0].group_id], (err, data) => {
        if (err) {
          return res.status(500).json({ message: "Internal error occurred!" });
        }
        console.log(data.length);
        if (data.length) {
          //Check password
          const isPasswordCorrect = bcrypt.compareSync(
            password,
            data[0].password
          );

          if (isPasswordCorrect) {
            return res.status(200).json({
              member_id: data[0].member_id,
              fullname: data[0].fullname,
              phone_no: data[0].phone_no,
              group_id: data[0].group_id,
              token: generateToken(data[0].member_id),
            });
          } else {
            return res
              .status(400)
              .json({ message: "Wrong username or password!" });
          }
        } else {
          return res
            .status(404)
            .json({ message: "Please check your group name or phone number!" });
        }
      });
    } else {
      return res.status(404).json({ message: "Please check your group name!" });
    }
  });
};
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
