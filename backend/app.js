const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const express = require("express");
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const app = express();

console.log("connecting");
let connect = false;
let connectedIn = 0;
setTimeout(connected, 500);
function connected() {
  if (connect) {
    return;
  } else {
    connectedIn += 500;
    console.log(".");
    setTimeout(connected, 500);
  }
}

mongoose
  .connect(
    "mongodb+srv://Shahraj:" +
      "az12sx34" +
      "@cluster0.9kpzp.gcp.mongodb.net/GoCart?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
  )
  .then(() => {
    connect = true;
    console.log("Connection Successful.(Connected in:-", connectedIn, "ms)");
  })
  .catch((error) => {
    console.log("error while establishing connection", error);
  });

module.exports = app;
