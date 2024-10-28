const {
  fetchAllFailedTransactions,
} = require("../service/transactionService");

const { fetchCassetteRepConfig } = require("../service/transactionService");
const { fetchCassetteRepForecast } = require("../service/transactionService");


exports.getAllFailedTransactions = async (req, res) => {
  try {
    // Call the service with request data and headers
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