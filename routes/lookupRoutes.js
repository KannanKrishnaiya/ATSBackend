const express = require("express");
const {
  getLookups,
  getLookupUserRoles,
} = require("../controllers/lookupController");

const router = express.Router();

// Route to forward data to the external API
router.post("/api/Lookups/Lookups", getLookups);
router.post("/api/Lookups/GetLookupUserRoles", getLookupUserRoles);

module.exports = router;
