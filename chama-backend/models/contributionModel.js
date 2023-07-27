const mongoose = require("mongoose");

const ContributionSchema = mongoose.Schema(
  {
    transactionDate: {
      type: String,
      required: true,
    },
    mpesaReceiptNumber: {
      type: String,
      required: true,
    },
    amountPaid: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Contribution = mongoose.model("Contribution", ContributionSchema);

module.exports = { Contribution };
