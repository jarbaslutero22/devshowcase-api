const express = require("express");
const cors = require("cors");

const profileRoutes = require("./routes/profileRoutes");
const technologyRoutes = require("./routes/technologyRoutes");
const projectRoutes = require("./routes/projectRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "DevShowcase API está funcionando!",
  });
});

app.use("/api/profiles", profileRoutes);
app.use("/api/technologies", technologyRoutes);
app.use("/api/projects", projectRoutes);

module.exports = app;