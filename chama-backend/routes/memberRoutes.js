const express = require("express");
const bcrypt = require("bcrypt");
const { generateToken } = require("../token");
const {
  registerMember,
  LoginMember,
  getGroupMember,
  getGroupMembers,
  getGroupManagement,
} = require("../controllers/members");

const memberRouter = express.Router();

// ADMIN ADD MEMBER

memberRouter.post("/register", registerMember);

// LOGIN

memberRouter.post("/login", LoginMember);

//GET ALL MEMBERS

memberRouter.get("/", getGroupMembers);

// GET ALL ADMINS
memberRouter.get("/admins", getGroupManagement);

// GET INDIVIDUAL MEMBER
memberRouter.get("/:id", getGroupMember);

module.exports = { memberRouter };
