const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = 5000;

// random server name (for fun)
const serverName = "Server-" + Math.floor(Math.random() * 100);

app.get("/", (req, res) => {
  res.json({
    message: "Hello from Backend 🚀",
    server: serverName,
    time: new Date().toLocaleTimeString(),
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});