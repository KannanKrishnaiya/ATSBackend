const express = require("express");
const {
  getAllFailedTransactions,
} = require("../controllers/transactionController");

const {
  getCassetteRepConfig,
} = require("../controllers/transactionController");

const router = express.Router();

// Route to forward data to external API
router.post(
  "/api/Transactions/GetAllFailedTransactions",
  getAllFailedTransactions
);

router.post("/api/Transactions/GetCassetteRepConfig", getCassetteRepConfig);

module.exports = router;
