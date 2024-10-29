const { fetchVVDashboardData } = require("../service/vynamicViewService");
const {
  fetchAllMachinesUpTimePercentage,
} = require("../service/vynamicViewService");
const { fetchCassetteAverage } = require("../service/vynamicViewService");
const {
  fetchCasseteCounterDenomination,
} = require("../service/vynamicViewService");

const { fetchVVMachinesUpTime } = require("../service/vynamicViewService");

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

exports.getAllMachinesUpTimePercentage = async (req, res) => {
  try {
    // Pass request data and headers to the service function
    const data = await fetchAllMachinesUpTimePercentage(
      req.body,
      req.headers.authorization
    );
    res.json(data); // Send the received data back to the client
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.calculateCassetteAverage = async (req, res) => {
  try {
    // Pass request data and headers to the service function
    const data = await fetchCassetteAverage(
      req.body,
      req.headers.authorization
    );
    res.json(data); // Send the received data back to the client
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.getCasseteCounterDenomination = async (req, res) => {
  try {
    // Pass request data and headers to the service function
    const data = await fetchCasseteCounterDenomination(
      req.body,
      req.headers.authorization
    );
    res.json(data); // Send the received data back to the client
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.getVVMachinesUpTime = async (req, res) => {
  try {
    const data = await fetchVVMachinesUpTime(
      req.body,
      req.headers.authorization
    );
    res.json(data);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: error.message });
  }
};