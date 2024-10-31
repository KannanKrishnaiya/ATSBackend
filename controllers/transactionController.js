const {
  // fetchAllFailedTransactions,
  fetchCassetteRepConfig,
  fetchCassetteRepForecast,
  fetchCashWithdrawalTransactions,
  fetchCashDepositTransactions,
  fetchAllTransactions,
  fetchAllFailedTransactions,
  fetchOtherTransactions,
  fetchTransactionDetails,
  fetchCashDepositCassetteDetails,
  fetchChequeDepositDetails,
  fetchCashWithdrawalCassetteDetails,
  fetchCalcCashRepForecast,
} = require("../service/transactionService");


// exports.getAllFailedTransactions = async (req, res) => {
//   try {
//     // Call the service with request data and headers
//     const data = await fetchAllFailedTransactions(
//       req.body,
//       req.headers.authorization
//     );
//     res.json(data); // Send the response back to the client
//   } catch (error) {
//     console.error("Error:", error.message);
//     res.status(500).json({ error: error.message });
//   }
// };

exports.getCassetteRepConfig = async (req, res) => {
  try {
    // Pass request data and headers to the service function
    const data = await fetchCassetteRepConfig(
      req.body,
      req.headers.authorization
    );
    res.json(data); // Send the received data back to the client
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.getCassetteRepForecast = async (req, res) => {
  try {
    // Pass request data and headers to the service function
    const data = await fetchCassetteRepForecast(
      req.body,
      req.headers.authorization
    );
    res.json(data); // Send the received data back to the client
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: error.message });
  }
};


exports.getCashWithdrawalTransactions = async (req, res) => {
  try {
    const data = await fetchCashWithdrawalTransactions(
      req.body,
      req.headers.authorization
    );
    res.json(data); // Send the response back to the client
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: error.message });
  }
};


exports.getCashDepositTransactions = async (req, res) => {
  try {
    const data = await fetchCashDepositTransactions(
      req.body,
      req.headers.authorization
    );
    res.json(data); // Send the response back to the client
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: error.message });
  }
};


exports.getAllTransactions = async (req, res) => {
  try {
    const data = await fetchAllTransactions(
      req.body,
      req.headers.authorization
    );
    res.json(data); // Send the response back to the client
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.getAllFailedTransactions = async (req, res) => {
  try {
    const data = await fetchAllFailedTransactions(
      req.body,
      req.headers.authorization
    );
    res.json(data); // Send the response back to the client
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.getOtherTransactions = async (req, res) => {
  try {
    const data = await fetchOtherTransactions(
      req.body,
      req.headers.authorization
    );
    res.json(data);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.getTransactionDetails = async (req, res) => {
  try {
    const data = await fetchTransactionDetails(
      req.body,
      req.headers.authorization
    );
    res.json(data);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.getCashDepositCassetteDetails = async (req, res) => {
  try {
    const data = await fetchCashDepositCassetteDetails(
      req.body,
      req.headers.authorization
    );
    res.json(data);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.getChequeDepositDetails = async (req, res) => {
  try {
    const data = await fetchChequeDepositDetails(
      req.body,
      req.headers.authorization
    );
    res.json(data);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.getCashWithdrawalCassetteDetails = async (req, res) => {
  try {
    const data = await fetchCashWithdrawalCassetteDetails(
      req.body,
      req.headers.authorization
    );
    res.json(data);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: error.message });
  }
};


exports.calcCashRepForecast = async (req, res) => {
  try {
    // Call the service with request data and headers
    const data = await fetchCalcCashRepForecast(
      req.body,
      req.headers.authorization
    );
    res.json(data); // Send the response back to the client
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: error.message });
  }
};