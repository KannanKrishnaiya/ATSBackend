const axios = require("axios");
const https = require("https");
const { apiBaseUrl } = require("../config");

const httpsAgent = new https.Agent({ rejectUnauthorized: false });

exports.registerUser = async (requestData) => {
  try {
    const response = await axios.post(
      `${apiBaseUrl}i/Auth/Register`,
      requestData,
      { httpsAgent, headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data || error.message);
  }
};

exports.updatePassword = async (requestData, token) => {

  try {
    const response = await axios.post(
      `${apiBaseUrl}/Auth/UpdatePassword`,
      requestData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        httpsAgent,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data || error.message);
  }
};

exports.resetPassword = async (requestData) => {
  try {
    const response = await axios.post(
      `${apiBaseUrl}/Auth/ResetPassword`,
      requestData,
      { httpsAgent, headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data || error.message);
  }
};

exports.checkUserExists = async (requestData) => {
  try {
    const response = await axios.post(
      `${apiBaseUrl}/Auth/CheckUserExists`,
      requestData,
      { httpsAgent, headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data || error.message);
  }
};

exports.fetchAllUsers = async (authorizationHeader) => {
  try {
    const response = await axios.get(`${apiBaseUrl}/Auth/GetAllUsers`, {
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
