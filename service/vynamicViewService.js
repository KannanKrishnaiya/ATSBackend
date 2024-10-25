const axios = require("axios");
const https = require("https");

const httpsAgent = new https.Agent({ rejectUnauthorized: false });

exports.fetchVVDashboardData = async (requestData, authorizationHeader) => {
  try {
    // Send the request to the external API with the passed request data
    const response = await axios.post(
      "https://20.196.9.136:45080/api/VynamicView/GetVVDashboardData",
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
