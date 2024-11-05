const express = require("express");
const {
  getLookups,
  getLookupUserRoles,
  getLookupsBanks,
} = require("../controllers/lookupController");

const router = express.Router();

// Route to forward data to the external API
router.post("/api/Lookups/Lookups", getLookups); //  DONT USE THIS ROUTE INSTEAD USE / api / Lookups / GetLookupsBanks
router.post("/api/Lookups/GetLookupsBanks", getLookupsBanks);
router.post("/api/Lookups/GetLookupUserRoles", getLookupUserRoles);

module.exports = router;
