const express = require("express");
const Message = require("../models/messageModel");

const messageRouter = express.Router();

messageRouter.post("/add", async (req, res) => {
  const { phoneNo, message } = req.body;

  const saveMessage = async (msg, count) => {
    const newMessage = await new Message({
      message: msg,
      countSuccess: count,
    });

    if (newMessage) {
      await newMessage.save();
      res.json(newMessage);
    }
  };

  axios
    .post("https://ats-sms-api.onrender.com/sms", {
      recipients: phoneNo,
      message,
    })
    .then((res) => {
      saveMessage(message, res.count);
    })
    .catch((err) => {
      res.json({ message: "An error occured!" });
    });
});

//GET MESSAGES
messageRouter.get("/", async (req, res) => {
  const messages = await Message.find({});
  if (messages.legth > 0) {
    res.json(messages);
  }
});

module.exports = { messageRouter };
