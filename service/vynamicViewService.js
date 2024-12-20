const axios = require("axios");
const https = require("https");
const { apiBaseUrl } = require("../config");

const httpsAgent = new https.Agent({ rejectUnauthorized: false });

exports.fetchVVDashboardData = async (requestData, authorizationHeader) => {
  try {
    // Send the request to the external API with the passed request data
    const response = await axios.post(
      `${apiBaseUrl}/VynamicView/GetVVDashboardData`,
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

exports.fetchAllMachinesUpTimePercentage = async (
  requestData,
  authorizationHeader
) => {
  try {
    // Make the request to the external API with incoming data
    const response = await axios.post(
      `${apiBaseUrl}/VynamicView/GetVV_AllMachinesUpTimePercentage`,
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


exports.fetchCassetteAverage = async (requestData, authorizationHeader) => {
  try {
    // Make the request to the external API with incoming data
    const response = await axios.post(
      `${apiBaseUrl}/VynamicView/CassetteAverageCalculation`,
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



exports.fetchCasseteCounterDenomination = async (
  requestData,
  authorizationHeader
) => {
  try {
    // Make the request to the external API with incoming data
    const response = await axios.post(
      `${apiBaseUrl}/VynamicView/CasseteCounterDenomination`,
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


exports.fetchVVMachinesUpTime = async (requestData, authorizationHeader) => {
  try {
    const response = await axios.post(
      `${apiBaseUrl}/VynamicView/GetVV_MachinesUpTime`,
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


exports.fetchVVIMAllTicket = async (requestData, authorizationHeader) => {
  try {
    // Make the request to the external API with the incoming request data
    const response = await axios.post(
      `${apiBaseUrl}/VynamicView/Get_VVIM_ALL_TICKET`,
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

exports.fetchCurrentCDMLevel = async (requestData, authorizationHeader) => {
  try {
    const response = await axios.post(
      `${apiBaseUrl}/VynamicView/CurrentCDMLevel`,
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

exports.fetchChequeClearanceRpt = async (requestData, authorizationHeader) => {
  try {
    const response = await axios.post(
      `${apiBaseUrl}/VynamicView/ChequeClearanceRpt`,
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