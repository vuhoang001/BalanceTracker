const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
  res.json("dang cap vu tru 11 02 ");
});

app.listen(3000, () => {
  console.log("Example app is listening in 3000");
});
