const express = require("express");
const { getAllMachineDetails } = require("../controllers/machineController");

const router = express.Router();

// Route to forward data to the external API
router.post("/api/VynamicView/Get_AllMachineDetails", getAllMachineDetails);

module.exports = router;
