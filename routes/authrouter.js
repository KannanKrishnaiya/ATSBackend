// routes/externalApiRoutes.js
const express = require("express");
const { Auth } = require("../controllers/authController");

const router = express.Router();

console.error("aauth router Testing");
// Define the route for getting external data
router.post("/login", Auth);

module.exports = router;
