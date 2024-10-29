require("dotenv").config();
const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRouter");
const userRoutes = require("./routes/userRouter");
const vynamicViewRoutes = require("./routes/vynamicViewRoutes");
const transactionRoutes = require("./routes/transactionRoutes");
const lookupRoutes = require("./routes/lookupRoutes");
const machineRoutes = require("./routes/machineRoutes");
const { port } = require("./config");

const app = express();
const ports = port || 35082;

app.use(cors());
app.use(express.json());

app.get("/test", (req, res) => {
  res.send("Node Server is up and running successfully");
});

// Use Routes
app.use(authRoutes);
app.use(userRoutes);
app.use(vynamicViewRoutes);
app.use(transactionRoutes);
app.use(lookupRoutes);
app.use(machineRoutes);

app.listen(ports, '0.0.0.0', () => {
  console.log(`Server is running on http://localhost:${ports}`);
});
