// const axios = require("axios");

// const config = require("../config");
// console.log("Base API URL:", config.apiBaseUrl);
// // const apiRootUrl = config.API_ROOT_URL;

// const instance = axios.create({
//   httpsAgent: new require("https").Agent({
//     rejectUnauthorized: false, // This will ignore self-signed certificates
//   }),
// });

// const Auth = async (req, res) => {
//   try {
//     const response = await instance.post(
//       `${config.apiBaseUrl}/Auth/login`,
//       req.body
//     );
//     res.json(response.data);
//   } catch (error) {
//     console.error("Error fetching data from external API:", error.message);
//     res.status(500).json({ error: "Error fetching data" });
//   }
// };

// module.exports = {
//   Auth,
// };

const axios = require("axios");
const https = require("https");
const { apiBaseUrl } = require("../config");

const httpsAgent = new https.Agent({ rejectUnauthorized: false });

const {
  updatePassword,
  resetPassword,
  checkUserExists,
  fetchCheckUserExists,
  fetchRegisterUser,
} = require("../service/authService");

exports.getToken = async (req, res) => {

  try {
    const response = await axios.post(`${apiBaseUrl}/Auth/login`, req.body, {
      httpsAgent,
      headers: {
        "Content-Type": "application/json",
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
    res.status(500).json({ error: error.response?.data || error.message });
  }
};


exports.registerUser = async (req, res) => {
  const token = req.headers.authorization; 
  try {
    const data = await fetchRegisterUser(req.body, token);
    res.json(data); 
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.updatePassword = async (req, res) => {
  try {
    const requestData = req.body; 
    const data = await updatePassword(requestData, req.headers.authorization);
    res.json(data);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.resetPassword = async (req, res) => {
  try {
   const requestData = req.body; 
     const data = await resetPassword(requestData, req.headers.authorization);
    res.json(data);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: error.message });
  }
};



exports.checkUserExists = async (req, res) => {
  const token = req.headers.authorization; 

  try {
   
    const data = await fetchCheckUserExists(req.body, token);
    res.json(data); 
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: error.message });
  }
};
