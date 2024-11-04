const axios = require("axios");
const https = require("https");
const { fetchUserDetailsByUserName, fetchAllUsers } = require("../service/userService");
const { apiBaseUrl } = require("../config");

const httpsAgent = new https.Agent({ rejectUnauthorized: false });

exports.getUserDetailByName = async (req, res) => {
  const { UserName } = req.body;
  const token = req.headers.authorization.split(" ")[1];

  try {
    const response = await axios.post(
      `${apiBaseUrl}/User/GetUserRoleDetailsByName`,
      req.body,
      {
        httpsAgent,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
   
    res.json(response.data);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.getUserDetailsByUserName = async (req, res) => {
  try {
    // Pass request data and headers to the service function
    const data = await fetchUserDetailsByUserName(
      req.body,
      req.headers.authorization
    );
    res.json(data); // Send the received data back to the client
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.getAllUsers = async (req, res) => {
  const token = req.headers.authorization;

  try {
    const data = await fetchAllUsers(token);
    res.json(data);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: error.message });
  }
};
