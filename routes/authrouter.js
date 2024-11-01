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
  register,
  updatePassword,
  resetPassword,
  checkUserExists,
  getAllUsers,
} = require("../controllers/authController");

const router = express.Router();

// Routes
router.post("/api/Auth/login", getToken);

router.post("/api/Auth/Register", register);
router.post("/api/Auth/UpdatePassword", updatePassword);
router.post("/api/Auth/ResetPassword", resetPassword);
router.post("/api/Auth/CheckUserExists", checkUserExists);
router.get("/api/Auth/GetAllUsers", getAllUsers);

module.exports = router;
