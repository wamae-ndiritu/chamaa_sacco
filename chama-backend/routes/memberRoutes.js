const express = require("express");
const bcrypt = require("bcrypt");
const { Member } = require("../models/memberModel");
const { generateToken } = require("../token");

const memberRouter = express.Router();

// ADMIN ADD MEMBER

memberRouter.post("/register", async (req, res) => {
  const { fullname, email, phone } = req.body;

  const memberEmail = email || "";

  const memberExists = await Member.findOne({ phone });

  if (memberExists) {
    res.status(400).send({ message: "User already exist" });
    // throw new Error("User already exists");
  } else {
    const salt = 10;
    const hashPassword = await bcrypt.hash(phone, salt);
    if (hashPassword) {
      const member = new Member({
        fullname,
        email: memberEmail,
        phone,
        password: hashPassword,
      });
      if (member) {
        const result = await member.save();
        res.status(201).json({
          _id: result._id,
          fullname: result.fullname,
          email: result.email,
        });
      } else {
        res.status(400);
        throw new Error("Invalid User Data");
      }
    } else {
      res.status(500);
      throw new Error("Internal server error");
    }
  }
});

// LOGIN

memberRouter.post("/login", async (req, res) => {
  const { phone, password } = req.body;

  const member = await Member.findOne({ phone });
  if (member) {
    const comparePassword = await bcrypt.compare(password, user.password);
    if (comparePassword) {
      res.status(200);
      res.json({
        _id: member._id,
        fullname: member.fullname,
        email: member.email,
        phone: member.phone,
        isAdmin: member.isAdmin,
        token: generateToken(member._id),
        createdAt: member.createdAt,
      });
    } else {
      res.status(400).send({ message: "Invalid Password!" });
    }
  } else {
    res.status(404).send({ message: "You are not a member of the chamaa!" });
  }
});

//GET ALL MEMBERS

memberRouter.get("/", async (req, res) => {
  const members = await Member.find({});
  if (members.length > 0) {
    res.json(members);
  }
});

// GET ALL ADMINS
memberRouter.get("/admins", async (req, res) => {
  const members = await Member.find({ isAdmin: true });
  if (members.length > 0) {
    res.json(members);
  }
});

// GET INDIVIDUAL MEMBER
memberRouter.get("/:id", async (req, res) => {
  const memberId = req.params.id;

  const member = await Member.findOne({ _id: memberId });
  if (member) {
    res.json(member);
  }
});

module.exports = { memberRouter };
