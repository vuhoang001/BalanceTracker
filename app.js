const express = require("express");
const app = express();
require("dotenv").config();

app.use("/", (req, res) => {
  res.json("Working success");
});

require("./database/init.mongo");
app.use("/", require("./routes/index"));

module.exports = app;
