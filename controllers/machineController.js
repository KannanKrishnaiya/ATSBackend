const { fetchAllMachineDetails } = require("../service/machineService");

exports.getAllMachineDetails = async (req, res) => {
  try {
    // Pass request data and headers to the service function
    const data = await fetchAllMachineDetails(
      req.body,
      req.headers.authorization
    );
    res.json(data); // Send the received data back to the client
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: error.message });
  }
};
