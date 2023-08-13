const { db } = require("../config/db");
const registerGroup = async (req, res) => {
  const { name, county, constituency, ward, village } = req.body;
  //CHECK EXISTING GROUP
  const query = "SELECT * FROM `groups` WHERE group_name = ?";

  db.query(query, [name], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length)
      return res.status(409).json({ message: "Group already exists!" });

    const query =
      "INSERT INTO `groups`(`group_name`,`county`,`constituency`, `ward`, `village`) VALUES (?)";
    const values = [name, county, constituency, ward, village];

    db.query(query, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json({ message: "Group has been created." });
    });
  });
};

module.exports = { registerGroup };
