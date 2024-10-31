const axios = require("axios");
const https = require("https");
const { apiBaseUrl } = require("../config");

const httpsAgent = new https.Agent({ rejectUnauthorized: false });

// exports.fetchAllFailedTransactions = async (
//   requestData,
//   authorizationHeader
// ) => {
//   try {
//     // Make the request to the external API with the incoming request data
//     const response = await axios.post(
//       `${apiBaseUrl}/Transactions/GetAllFailedTransactions`,
//       requestData,
//       {
//         httpsAgent,
//         headers: {
//           Authorization: authorizationHeader,
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     return response.data;
//   } catch (error) {
//     throw new Error(error.response?.data || error.message);
//   }
// };




exports.fetchCassetteRepConfig = async (requestData, authorizationHeader) => {
  try {
    // Make the request to the external API with incoming data
    const response = await axios.post(
      `${apiBaseUrl}/Transactions/GetCassetteRepConfig`,
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

exports.fetchCassetteRepForecast = async (requestData, authorizationHeader) => {
  try {
    // Make the request to the external API with incoming data
    const response = await axios.post(
      `${apiBaseUrl}/Transactions/CassetteRepForecast`,
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

exports.fetchCashWithdrawalTransactions = async (
  requestData,
  authorizationHeader
) => {
  const httpsAgent = new https.Agent({ rejectUnauthorized: false });

  try {
    const response = await axios.post(
      `${apiBaseUrl}/Transactions/GetCashWithdrawalTransactions`,
      requestData,
      {
        httpsAgent,
        headers: {
          Authorization: authorizationHeader,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data; // Return the external API's response
  } catch (error) {
    throw new Error(error.response?.data || error.message);
  }
};

exports.fetchCashDepositTransactions = async (
  requestData,
  authorizationHeader
) => {
  const httpsAgent = new https.Agent({ rejectUnauthorized: false });

  try {
    const response = await axios.post(
      `${apiBaseUrl}/Transactions/GetCashDepositTransactions`,
      requestData,
      {
        httpsAgent,
        headers: {
          Authorization: authorizationHeader,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data; // Return the external API's response
  } catch (error) {
    throw new Error(error.response?.data || error.message);
  }
};

exports.fetchAllTransactions = async (requestData, authorizationHeader) => {
  const httpsAgent = new https.Agent({ rejectUnauthorized: false });

  try {
    const response = await axios.post(
      `${apiBaseUrl}/Transactions/GetAllTransactions`,
      requestData,
      {
        httpsAgent,
        headers: {
          Authorization: authorizationHeader,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data; // Return the external API's response
  } catch (error) {
    throw new Error(error.response?.data || error.message);
  }
};

exports.fetchAllFailedTransactions = async (
  requestData,
  authorizationHeader
) => {
  const httpsAgent = new https.Agent({ rejectUnauthorized: false });

  try {
    const response = await axios.post(
      `${apiBaseUrl}/Transactions/GetAllFailedTransactions`,
      requestData,
      {
        httpsAgent,
        headers: {
          Authorization: authorizationHeader,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data; // Return the external API's response
  } catch (error) {
    throw new Error(error.response?.data || error.message);
  }
};

exports.fetchOtherTransactions = async (requestData, authorizationHeader) => {
  try {
    const response = await axios.post(
      `${apiBaseUrl}/Transactions/GetOtherTransactions`,
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

exports.fetchTransactionDetails = async (requestData, authorizationHeader) => {


  try {
    const response = await axios.post(
      `${apiBaseUrl}/Transactions/GetTransactionDetails`,
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

exports.fetchCashDepositCassetteDetails = async (
  requestData,
  authorizationHeader
) => {
  try {
    const response = await axios.post(
      `${apiBaseUrl}/Transactions/GetCashDepositCassetteDetails`,
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

exports.fetchChequeDepositDetails = async (
  requestData,
  authorizationHeader
) => {
  try {
    const response = await axios.post(
      `${apiBaseUrl}/Transactions/GetChequeDepositDetails`,
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

exports.fetchCashWithdrawalCassetteDetails = async (
  requestData,
  authorizationHeader
) => {
  try {
    const response = await axios.post(
      `${apiBaseUrl}/Transactions/GetCashWithdrawalCassetteDetails`,
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


exports.fetchCalcCashRepForecast = async (requestData, authorizationHeader) => {
  try {
    // Make the request to the external API with the incoming request data
    const response = await axios.post(
      `${apiBaseUrl}/Transactions/Calc_CashRepForecast`,
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