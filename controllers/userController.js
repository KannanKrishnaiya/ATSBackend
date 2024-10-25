const axios = require("axios");
const https = require("https");

const httpsAgent = new https.Agent({ rejectUnauthorized: false });

exports.getUserDetailByName = async (req, res) => {
  const { UserName } = req.body;
  const token = req.headers.authorization.split(" ")[1];

  try {
    const response = await axios.post(
      "https://20.196.9.136:45080/api/User/GetUserRoleDetailsByName",
      req.body,
      {
        httpsAgent,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Response from external API:", response.data);
    res.json(response.data);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: error.message });
  }
};
