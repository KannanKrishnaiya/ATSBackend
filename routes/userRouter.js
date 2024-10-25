const express = require("express");
const { getUserDetailByName } = require("../controllers/userController");

const router = express.Router();

// Routes
router.post("/api/User/GetUserRoleDetailsByName", getUserDetailByName);

module.exports = router;
