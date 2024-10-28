// // routes/externalApiRoutes.js
// const express = require("express");
// const { Auth } = require("../controllers/authController");

// const router = express.Router();

// console.error("aauth router Testing");
// // Define the route for getting external data
// router.post("/login", Auth);

// module.exports = router;

const express = require("express");
const { getToken } = require("../controllers/authController");
// const { getUserDetailByName } = require("../controllers/userController");

const router = express.Router();

// Routes
router.post("/api/Auth/login", getToken);
// router.post("/api/User/GetUserRoleDetailsByName", getUserDetailByName);

module.exports = router;
