const express = require("express");
const { getVVDashboardData } = require("../controllers/vynamicViewController");

const router = express.Router();

// Route to bypass data to external API
router.post("/api/VynamicView/GetVVDashboardData", getVVDashboardData);

module.exports = router;
