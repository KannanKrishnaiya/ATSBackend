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
