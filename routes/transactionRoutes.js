const express = require("express");
const {
  // getAllFailedTransactions,
  getCassetteRepConfig,
  getCassetteRepForecast,
  getCashWithdrawalTransactions,
  getCashDepositTransactions,
  getAllTransactions,
  getAllFailedTransactions,
  getOtherTransactions,
  getTransactionDetails,
  getCashDepositCassetteDetails,
  getChequeDepositDetails,
  getCashWithdrawalCassetteDetails,
  calcCashRepForecast,
  getAllMailConfig,
} = require("../controllers/transactionController");

const router = express.Router();

// Route to forward data to external API
// router.post(
//   "/api/Transactions/GetAllFailedTransactions",
//   getAllFailedTransactions
// );

router.post("/api/Transactions/GetCassetteRepConfig", getCassetteRepConfig);

router.post("/api/Transactions/CassetteRepForecast", getCassetteRepForecast);

router.post(
  "/api/Transactions/GetCashWithdrawalTransactions",
  getCashWithdrawalTransactions
);

router.post(
  "/api/Transactions/GetCashDepositTransactions",
  getCashDepositTransactions
);

router.post("/api/Transactions/GetAllTransactions", getAllTransactions);

router.post(
  "/api/Transactions/GetAllFailedTransactions",
  getAllFailedTransactions
);

router.post("/api/Transactions/GetOtherTransactions", getOtherTransactions);


router.post("/api/Transactions/GetTransactionDetails", getTransactionDetails);


router.post("/api/Transactions/GetCashDepositCassetteDetails", getCashDepositCassetteDetails);


router.post("/api/Transactions/GetChequeDepositDetails", getChequeDepositDetails);


router.post("/api/Transactions/GetCashWithdrawalCassetteDetails", getCashWithdrawalCassetteDetails);

router.post("/api/Transactions/Calc_CashRepForecast", calcCashRepForecast);

router.get("/api/Transactions/GetAllMailConfig", getAllMailConfig);

module.exports = router;
