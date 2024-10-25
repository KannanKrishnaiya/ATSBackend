const express = require("express");
const {
  getAllFailedTransactions,
} = require("../controllers/transactionController");

const {
  getCassetteRepConfig,
} = require("../controllers/transactionController");

const {
  getCassetteRepForecast,
} = require("../controllers/transactionController");

const router = express.Router();

// Route to forward data to external API
router.post(
  "/api/Transactions/GetAllFailedTransactions",
  getAllFailedTransactions
);

router.post("/api/Transactions/GetCassetteRepConfig", getCassetteRepConfig);

router.post("/api/Transactions/CassetteRepForecast", getCassetteRepForecast);

module.exports = router;
