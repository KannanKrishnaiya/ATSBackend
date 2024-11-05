// // routes/externalApiRoutes.js
// const express = require("express");
// const { Auth } = require("../controllers/authController");

// const router = express.Router();

// console.error("aauth router Testing");
// // Define the route for getting external data
// router.post("/login", Auth);

// module.exports = router;

const express = require("express");
const {
  getToken,
  updatePassword,
  resetPassword,
  checkUserExists,
  registerUser,
  logoutUser,
  updateUser,
} = require("../controllers/authController");

const router = express.Router();

// Routes
router.post("/api/Auth/login", getToken);
router.post("/api/Auth/logout", logoutUser);
router.post("/api/Auth/Register", registerUser);
router.post("/api/Auth/UpdateUser", updateUser);
router.post("/api/Auth/UpdatePassword", updatePassword);
router.post("/api/Auth/ResetPassword", resetPassword);
router.post("/api/Auth/CheckUserExists", checkUserExists);

module.exports = router;
