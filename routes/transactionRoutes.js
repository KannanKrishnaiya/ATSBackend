const express = require("express");
const {
  getAllFailedTransactions,
} = require("../controllers/transactionController");

const router = express.Router();

// Route to forward data to external API
router.post(
  "/api/Transactions/GetAllFailedTransactions",
  getAllFailedTransactions
);

module.exports = router;
