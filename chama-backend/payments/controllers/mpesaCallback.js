const express = require("express");

const callBackRouter = express.Router();

// callbackURL FOR STK PUSH
callBackRouter.post("/", async (req, res) => {
  const result = req.body.Body.stkCallback.CallbackMetadata;

  console.log(req.body);

  console.log(result);

  const amountPaid = result.Item[0].Value;

  const mpesaReceiptNumber = result.Item[1].Value;

  const TransactionDate = result.Item[3].Value;

  const formattedDate = (TransactionDate) => {
    const date = TransactionDate.toString();

    const TransactionYear = date.slice(0, 4);
    const TransactionMonth = date.slice(4, 6);
    const Transactiondate = date.slice(6, 8);
    const TransactionHour = date.slice(8, 10);
    const TransactionMin = date.slice(10, 12);

    const formattedTransactionDate =
      Transactiondate +
      "/" +
      TransactionMonth +
      "/" +
      TransactionYear +
      " " +
      TransactionHour +
      ":" +
      TransactionMin;

    return formattedTransactionDate;
  };

  const transactionDate = formattedDate(TransactionDate);

  const PhoneNumber = result.Item[4].Value;
  const formattedStringifiedPhoneNo = PhoneNumber.toString().replace(
    "254",
    "0"
  );
  const phoneNo = Number(formattedStringifiedPhoneNo);
  console.log(amountPaid, mpesaReceiptNumber, transactionDate, phoneNo);
});

// QueueURL FOR B2C
callBackRouter.post("/queue", (req, res) => {
  console.log(req.body);
});

// ResultRL FOR B2C
callBackRouter.post("/b2c", async (req, res) => {
  console.log(req.body.Result);
});
module.exports = { callBackRouter };
