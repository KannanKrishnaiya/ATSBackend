const { fetchVVDashboardData } = require("../service/vynamicViewService");

exports.getVVDashboardData = async (req, res) => {
  try {
    // Pass the request data and authorization header to the service
    const data = await fetchVVDashboardData(
      req.body,
      req.headers.authorization
    );
    res.json(data); // Send the received data back to the client
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: error.message });
  }
};
