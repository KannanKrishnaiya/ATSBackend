const axios = require("axios");
const https = require("https");
const { apiBaseUrl } = require("../config");

const httpsAgent = new https.Agent({ rejectUnauthorized: false });

exports.fetchRegisterUser = async (requestData, authorizationHeader) => {


  try {
    const response = await axios.post(
      `${apiBaseUrl}/Auth/Register`,
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

exports.resetPassword = async (requestData, token) => {
  try {
    const response = await axios.post(
      `${apiBaseUrl}/Auth/ResetPassword`,
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

exports.fetchCheckUserExists = async (requestData, authorizationHeader) => {
  try {
    const response = await axios.post(
      `${apiBaseUrl}/Auth/CheckUserExists`,
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


exports.fetchLogoutUser = async (requestData, authorizationHeader) => {
  try {
    const response = await axios.post(
      `${apiBaseUrl}/Auth/logout`,
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

exports.fetchUpdateUser = async (requestData, authorizationHeader) => {
  try {
    const response = await axios.post(
      `${apiBaseUrl}/Auth/UpdateUser`,
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



exports.fetchRefreshToken = async (requestData, authorizationHeader) => {
  try {
    const response = await axios.post(
      `${apiBaseUrl}/Auth/RefreshToken`,
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