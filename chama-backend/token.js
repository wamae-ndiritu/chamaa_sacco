const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "wamae", {
    expiresIn: 60,
  });
};

module.exports = { generateToken };
