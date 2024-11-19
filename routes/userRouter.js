const express = require("express");
const { getUserDetailByEmail, getAllUsers } = require("../controllers/userController");
const { getUserDetailsByUserName } = require("../controllers/userController");

const router = express.Router();

// Routes
router.post("/api/User/GetUserRoleDetailsByEmail", getUserDetailByEmail);
router.post("/api/user/GetUserDetailsByUserName", getUserDetailsByUserName);
router.get("/api/User/GetAllUsers", getAllUsers);

module.exports = router;
