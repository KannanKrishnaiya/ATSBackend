const axios = require("axios");
const https = require("https");

const httpsAgent = new https.Agent({ rejectUnauthorized: false });

exports.fetchAllFailedTransactions = async (
  requestData,
  authorizationHeader
) => {
  try {
    // Make the request to the external API with the incoming request data
    const response = await axios.post(
      "https://20.196.9.136:45080/api/Transactions/GetAllFailedTransactions",
      requestData,
      {
        httpsAgent,
        headers: {
          Authorization: authorizationHeader,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data || error.message);
  }
};
