const express = require("express");
const { getVVDashboardData } = require("../controllers/vynamicViewController");
const {
  getAllMachinesUpTimePercentage,
} = require("../controllers/vynamicViewController");
const {
  calculateCassetteAverage,
} = require("../controllers/vynamicViewController");
const {
  getCasseteCounterDenomination,
} = require("../controllers/vynamicViewController");

const { getVVMachinesUpTime } = require("../controllers/vynamicViewController");

const router = express.Router();

// Route to bypass data to external API
router.post("/api/VynamicView/GetVVDashboardData", getVVDashboardData);
router.post(
  "/api/VynamicView/GetVV_AllMachinesUpTimePercentage",
  getAllMachinesUpTimePercentage
);
router.post(
  "/api/VynamicView/CassetteAverageCalculation",
  calculateCassetteAverage
);
router.post(
  "/api/VynamicView/CasseteCounterDenomination",
  getCasseteCounterDenomination
);

router.post("/api/VynamicView/GetVV_MachinesUpTime", getVVMachinesUpTime);

module.exports = router;
