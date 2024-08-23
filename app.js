const express = require("express");
const app = express();
require("dotenv").config();

require("./database/init.mongo");
app.use("/", require("./routes/index"));

module.exports = app;
