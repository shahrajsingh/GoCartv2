const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
  fisrtName: { type: String, required: true },
  password: { type: String, required: true },
  DoB: { type: String, required: true },
  lastName: { type: String, required: true },
  gender: { type: String, required: true },
  address: [{ type: String, required: true }],
  image: { type: String, required: false },
  email: { type: String, required: true, unique: true },
  wishlisted: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  cart: {
    type: [
      {
        ProductId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        qty: Number,
      },
    ],
  },
  orders: {
    type: [
      { OrderId: { type: mongoose.Schema.Types.ObjectId, ref: "Orders" } },
    ],
  },
});
userSchema.plugin(validator);

module.exports = mongoose.model("User", userSchema);
