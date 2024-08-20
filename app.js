const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
  res.json("tvh thich tay hu va nan mun");
});

app.listen(3000, () => {
  console.log("Example app is listening in 3000");
});
