const express = require("express");
const { getLookups } = require("../controllers/lookupController");

const router = express.Router();

// Route to forward data to the external API
router.post("/api/Lookups/Lookups", getLookups);

module.exports = router;
