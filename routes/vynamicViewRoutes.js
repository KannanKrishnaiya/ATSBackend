const express = require("express");

const {
  getVVDashboardData,
  calculateCassetteAverage,
  getAllMachinesUpTimePercentage,
  getCasseteCounterDenomination,
  getVVMachinesUpTime,
  getVVIMAllTicket,
  getCurrentCDMLevel,
  getChequeClearanceRpt,
} = require("../controllers/vynamicViewController");

const router = express.Router();

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

router.post("/api/VynamicView/Get_VVIM_ALL_TICKET", getVVIMAllTicket);

router.post("/api/VynamicView/CurrentCDMLevel", getCurrentCDMLevel);

router.post("/api/VynamicView/ChequeClearanceRpt", getChequeClearanceRpt);

module.exports = router;
