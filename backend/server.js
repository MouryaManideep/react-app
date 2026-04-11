const express = require("express");
const cors = require("cors");

const app = express();

// allow all origins (important for Vercel)
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from backend v2 🚀");
});

// IMPORTANT: bind to public IP
app.listen(5000, "0.0.0.0", () => {
  console.log("Server running on port 5000");
});