const axios = require("axios");
const https = require("https");

const httpsAgent = new https.Agent({ rejectUnauthorized: false });

exports.fetchAllMachineDetails = async (requestData, authorizationHeader) => {
  try {
    // Make the request to the external API with incoming data
    const response = await axios.post(
      `${apiBaseUrl}/VynamicView/Get_AllMachineDetails`,
      requestData,
      {
        httpsAgent,
        headers: {
          Authorization: authorizationHeader,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data; // Return the response data from the external API
  } catch (error) {
    throw new Error(error.response?.data || error.message);
  }
};
