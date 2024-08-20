const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
  res.json("dang cap vu tru 11 02 1231231231233");
});

app.listen(3000, () => {
  console.log("Example app is listening in 3000");
});
