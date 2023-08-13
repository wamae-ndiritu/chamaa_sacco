const { db } = require("../config/db");
const bcrypt = require("bcrypt");
const { generateToken } = require("../token");

const registerMember = (req, res) => {
  const { fullname, group_id, phone_no } = req.body;
  console.log(req.body);

  const groupId = Number(group_id);

  const query = "SELECT * FROM `members` WHERE phone_no = ? OR fullname = ?";

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
        "INSERT INTO `members`(`fullname`,`phone_no`,`password`,`group_id`, `isDefaultPass`, `isOfficial`) VALUES (?)";

      const values = [fullname, phone_no, hash, groupId, 1, 0];

      db.query(query, [values], (err, data) => {
        if (err) {
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
  const query = "SELECT * FROM `groups` WHERE group_name = ?";

  db.query(query, [group_name], (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Internal error occurred!" });
    }
    if (data.length) {
      // match user with group
      const query =
        "SELECT * FROM `members` WHERE phone_no = ? AND group_id = ?";
      db.query(query, [phone_no, data[0].group_id], (err, data) => {
        if (err) {
          return res.status(500).json({ message: "Internal error occurred!" });
        }
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
              isDefaultPass: data[0].isDefaultPass,
              isOfficial: data[0].isOfficial,
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

const updateProfile = (req, res) => {
  const memberId = Number(req.params.id);
  const { fullname, phone_no, password } = req.body;
  const pass = password || "";

  let changeDefaultPass = false;

  const query = "SELECT * FROM `members` WHERE member_id = ?";

  db.query(query, [memberId], (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Internal error occurred!" });
    }
    if (data.length) {
      let hashPass;
      if (pass !== "") {
        if (data[0].isDefaultPass) {
          changeDefaultPass = true;
        }
        const salt = bcrypt.genSaltSync(10);
        hashPass = bcrypt.hashSync(pass, salt);
      }

      const new_fullname = fullname || data[0].fullname;
      const new_phone_no = phone_no || data[0].phone_no;
      const new_pass = hashPass || data[0].password;
      const query =
        "UPDATE `members` SET fullname = ?, phone_no = ?,  password = ? WHERE member_id = ?";

      db.query(
        query,
        [new_fullname, new_phone_no, new_pass, memberId],
        (err, data) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "Internal error occurred!" });
          }
          if (data) {
            if (changeDefaultPass) {
              const query =
                "UPDATE `members` SET isDefaultPass = ? WHERE member_id = ?";

              db.query(query, [0, memberId], (err, data) => {
                if (err) {
                  return res
                    .status(500)
                    .json({ message: "Internal error occurred!" });
                }
              });
            }
            const query = "SELECT * FROM `members` WHERE member_id = ?";

            db.query(query, [memberId], (err, data) => {
              if (err) {
                return res
                  .status(500)
                  .json({ message: "Internal error occurred!" });
              }
              if (data.length) {
                return res.status(200).json({
                  member_id: data[0].member_id,
                  fullname: data[0].fullname,
                  phone_no: data[0].phone_no,
                  group_id: data[0].group_id,
                  isDefaultPass: data[0].isDefaultPass,
                  isOfficial: data[0].isOfficial,
                  token: generateToken(data[0].member_id),
                });
              }
            });
          }
        }
      );
    }
  });
};

const getGroupMembers = (req, res) => {
  const group_id = req.query.groups;
  const query = "SELECT * FROM members WHERE group_id = ?";

  db.query(query, [group_id], (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Internal error occurred!" });
    }
    res.status(200).json(data);
  });
};
const getGroupMember = (req, res) => {};
const getGroupManagement = (req, res) => {};

module.exports = {
  registerMember,
  LoginMember,
  getGroupMember,
  getGroupMembers,
  getGroupManagement,
  updateProfile,
};
