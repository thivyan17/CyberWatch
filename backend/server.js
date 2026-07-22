const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "CyberWatch API is running",
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "success",
    service: "CyberWatch API",
    timestamp: new Date().toISOString(),
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 CyberWatch API running on port ${PORT}`);
});