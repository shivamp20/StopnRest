const Razorpay = require("razorpay");
const uuid4 = require("uuid4");

const createPaymentController = (req, res) => {
  (async () => {
    try {
      const instance = new Razorpay({
        key_id: "rzp_test_Zlul8XlM4RPLdP",
        key_secret: "p1QY3r21iqrOYgXSnjgiR39p",
      });
      const options = {
        amount: req.body.amount,
        currency: "INR",
        receipt: uuid4(),
      };
      const order = await instance.orders.create(options);
      if (order) {
        return res.status(200).send(order);
      } else {
        return res.status(500).send({
          message: "Some error occured",
        });
      }
    } catch (err) {
      return res.status(500).send(err);
    }
  })();
};

module.exports = createPaymentController;
