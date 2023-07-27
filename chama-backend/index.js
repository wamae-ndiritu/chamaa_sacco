const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { connectDatabase } = require("./dbConfig");
const { memberRouter } = require("./routes/memberRoutes");
const { mpesaRouter } = require("./payments/routes/mpesaRoutes");
const { messageRouter } = require("./routes/messageRoutes");

dotenv.config();

const PORT = 5000;
const app = express();

// connect DB
connectDatabase();

// middlewares
app.use(express.json());
app.use(cors());

// API CALLS
app.use("/api/members", memberRouter);
app.use("/api/payments", mpesaRouter);
app.use("/api/messages", messageRouter);
// app.use("/api/contributions", memberRouter);

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
