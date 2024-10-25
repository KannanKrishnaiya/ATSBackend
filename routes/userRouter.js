const express = require("express");
// const { getToken } = require("../controllers/authController");
const { getUserDetailByName } = require("../controllers/userController");

const router = express.Router();

// Routes
// router.post("/Token", getToken);
router.post("/api/User/GetUserRoleDetailsByName", getUserDetailByName);

module.exports = router;
