const {
  fetchAllFailedTransactions,
} = require("../service/transactionService");

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
