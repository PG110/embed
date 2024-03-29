const Razorpay = require("razorpay");

apiKey = "rzp_test_A7wdOUbsCQI2aC";
apiSecret = "CoCSX72ltWnggYUJJ5s701Cn";

const razorpay = new Razorpay({
  key_id: apiKey,
  key_secret: apiSecret,
});

module.exports = razorpay;
