const express = require("express");

const userController = require("../controllers/User");
const router = express.Router();
const extractFile = require("../middleware/file");

router.post("/signup", extractFile, userController.signUp);
router.post("/login", userController.Login);

module.exports = router;
