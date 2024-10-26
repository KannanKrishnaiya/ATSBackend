const express = require("express");
const { getUserDetailByName } = require("../controllers/userController");
const { getUserDetailsByUserName } = require("../controllers/userController");

const router = express.Router();

// Routes
router.post("/api/User/GetUserRoleDetailsByName", getUserDetailByName);
router.post("/api/user/GetUserDetailsByUserName", getUserDetailsByUserName);

module.exports = router;
