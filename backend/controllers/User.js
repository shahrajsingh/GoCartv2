const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.signUp = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = new User({
        email: req.body.email,
        password: hash,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "an error has occured while hashing password",
        result: error,
      });
    });
  User.save()
    .then((result) => {
      res.status(201).json({ message: "user created.", result: result });
    })
    .catch((error) => {
      res.status(500).json({
        message: "error occured while creating user at 27",
        result: error,
      });
    });
};
exports.Login = (res, req, next) => {
  let fetchedUser;
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res
          .status(401)
          .json({ message: "user not found!", result: "no record!" });
      } else {
        fetchedUser = user;
        return bcrypt.compare(req.body.password, user.password);
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "an error occured while authenticating at 47",
        result: error,
      });
    })
    .then((result) => {
      if (!result) {
        return res
          .status(401)
          .json({ message: "Invalid authentication credentials!", result: "" });
      } else {
        const token = jwt.sign(
          { email: fetchedUser.email, userId: fetchedUser._id },
          process.env.JWT_KEY,
          { expiresIn: "1h" }
        );
        res.status(200).json({
          token: token,
          expiresIn: 3600,
          userId: fetchedUser._id,
        });
      }
    })
    .catch((error) => {
      res
        .status(401)
        .json({ message: "an error occured at 68", result: error });
    });
};
