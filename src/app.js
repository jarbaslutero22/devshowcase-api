const express = require("express");
const cors = require("cors");
const profileRoutes = require("./routes/profileRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "DevShowcase API está funcionando!",
  });
});

app.use("/api/profiles", profileRoutes);

module.exports = app;