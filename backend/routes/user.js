const express = require("express");

const userController = require("../controllers/User");
const router = express.Router();

router.post("/signup", userController.signUp);
router.post("/login", userController.Login);

module.exports = router;
