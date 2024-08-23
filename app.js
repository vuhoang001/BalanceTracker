const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
  res.json("asfasdf");
});

app.get("/test", (req, res, next) => {
  res.json("test");
});

app.listen(3000, () => {
  console.log("Example app is listening in 3000");
});
