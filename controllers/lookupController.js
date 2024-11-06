const {
  fetchLookups,
  fetchLookupUserRoles,
  fetchLookupsBanks,
} = require("../service/lookupService");

exports.getLookups = async (req, res) => {
  try {
    // Pass request data and headers to the service function
    const data = await fetchLookups(req.body, req.headers.authorization);
    res.json(data); // Send the received data back to the client
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: error.message });
  }
};


exports.getLookupUserRoles = async (req, res) => {
  const token = req.headers.authorization; 

  try {
    const data = await fetchLookupUserRoles(req.body, token); 
    res.json(data);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: error.message });
  }
};


exports.getLookupsBanks = async (req, res) => {
  const token = req.headers.authorization; 
  try {
    const data = await fetchLookupsBanks(req.body, token);
    res.json(data); 
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: error.message });
  }
};