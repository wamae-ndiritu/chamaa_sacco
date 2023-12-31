const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { memberRouter } = require("./routes/memberRoutes");
const { mpesaRouter } = require("./payments/routes/mpesaRoutes");
const { callBackRouter } = require("./payments/controllers/mpesaCallback");
const { groupRouter } = require("./routes/groupRoutes");
const { createTables } = require("./schemas");

dotenv.config();

const PORT = 5000;
const app = express();

// middlewares
app.use(express.json());
app.use(cors());

createTables();

// API CALLS
app.use("/api/members", memberRouter);
app.use("/api/payments", mpesaRouter);
app.use("/api/confirmation/", callBackRouter);
// app.use("/api/contributions", memberRouter);

//CHAMAA ADMIN APIS
app.use("/api/admin", groupRouter);

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
