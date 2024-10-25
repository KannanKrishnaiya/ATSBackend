const express = require("express");
const { getVVDashboardData } = require("../controllers/vynamicViewController");
const {
  getAllMachinesUpTimePercentage,
} = require("../controllers/vynamicViewController");

const router = express.Router();

// Route to bypass data to external API
router.post("/api/VynamicView/GetVVDashboardData", getVVDashboardData);
router.post(
  "/api/VynamicView/GetVV_AllMachinesUpTimePercentage",
  getAllMachinesUpTimePercentage
);

module.exports = router;
