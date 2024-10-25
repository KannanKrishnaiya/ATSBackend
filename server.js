require("dotenv").config();
const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRouter");
const userRoutes = require("./routes/userRouter");

const app = express();
const port = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());

// Use Routes
app.use(authRoutes);
app.use(userRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
