const axios = require("axios");
const datetime = require("node-datetime");

const passKey = process.env.PASS_KEY;
const consumerKey = process.env.CONSUMER_KEY;
const consumerSec = process.env.CONSUMER_SECRET;
const BusinessShortCode = process.env.BUSINESS_SHORT_CODE;
const till_no = process.env.TILL_NO;
const user_name = process.env.MPESA_USER_NAME;
const encrypted_pass = process.env.SECURITY_CREDENTIAL;

const newPassword = () => {
  const date = datetime.create();

  const formatted = date.format("YmdHMS");

  const passString = BusinessShortCode + passKey + formatted;

  const base64EencodedPassword = Buffer.from(passString).toString("base64");

  return base64EencodedPassword;
};

exports.mpesaPassword = (req, res) => {
  res.send(newPassword());
};

exports.token = (req, res, next) => {
  //ACCESS_TOKEN

  const url =
    "https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials";
  const auth =
    "Basic " + Buffer.from(consumerKey + ":" + consumerSec).toString("base64");

  const headers = {
    Authorization: auth,
  };

  axios
    .get(url, {
      headers,
    })
    .then((response) => {
      let token = response.data.access_token;
      req.access_token = token;
      next();
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ message: "Invalid request" });
    });
};

exports.stkPush = (req, res) => {
  let token = req.access_token;

  const { contributionAmount, phoneNo } = req.body;

  const phone = Number(phoneNo);
  const contribution = Number(contributionAmount);
  const headers = {
    Authorization: "Bearer " + token,
  };

  const dateNow = datetime.create();
  const timestamp = dateNow.format("YmdHMS");

  const callbackUrl = "https://chamaa-sacco-api.onrender.com/api/confirmation/";

  const stkUrl = "https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest";
  let data = {
    BusinessShortCode: BusinessShortCode,
    Password: newPassword(),
    Timestamp: timestamp,
    TransactionType: "CustomerBuyGoodsOnline",
    Amount: contribution,
    PartyA: phone,
    PartyB: till_no,
    PhoneNumber: phone,
    CallBackURL: callbackUrl,
    AccountReference: "Nelite IT Solutions",
    TransactionDesc: "Nelite IT Solutions",
  };

  // console.log(data);

  axios
    .post(stkUrl, data, { headers: headers })
    .then((response) => res.send(response.data))
    .catch((error) => {
      res.status(400).json({ message: "An error occurred" });
      console.log(error);
    });
};

exports.b2c = (req, res) => {
  let token = req.access_token;

  console.log(token);

  const { amount, phoneNo } = req.body;

  const payable_amount = Number(amount);
  const phone = Number(phoneNo);

  const url = "https://api.safaricom.co.ke/mpesa/b2c/v1/paymentrequest";

  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  };

  const data = {
    InitiatorName: user_name,
    SecurityCredential: encrypted_pass,
    CommandID: "BusinessPayment",
    Amount: payable_amount,
    PartyA: BusinessShortCode,
    PartyB: phone,
    Remarks: "NELITE IT SOLUTIONS",
    QueueTimeOutURL:
      "https://chamaa-sacco-api.onrender.com/api/confirmation/b2c/queue",
    ResultUrl: "https://chamaa-sacco-api.onrender.com/api/confirmation/b2c",
    Occassion: "Withdraw Savings",
  };

  axios
    .post(url, data, { headers })
    .then((response) => res.send(response.data))
    .catch((error) => {
      res.status(400).json({ message: "An error occurred!" });
      console.log(error);
    });
};
