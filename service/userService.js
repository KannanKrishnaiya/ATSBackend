const axios = require("axios");
const https = require("https");
const { apiBaseUrl } = require("../config");

const httpsAgent = new https.Agent({ rejectUnauthorized: false });

exports.fetchUserDetailsByUserName = async (
  requestData,
  authorizationHeader
) => {
  try {
    // Make the request to the external API with incoming data
    const response = await axios.post(
      `${apiBaseUrl}/user/GetUserDetailsByUserName`,
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

exports.fetchAllUsers = async (authorizationHeader) => {
  try {
    const response = await axios.get(`${apiBaseUrl}/User/GetAllUsers`, {
      httpsAgent,
      headers: {
        Authorization: authorizationHeader,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data || error.message);
  }
};
