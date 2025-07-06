const express = require("express");
const app = express();

app.get("/sum", (req, res) => {
  const sum = 5 + 5;
  res.status(200).send("hello world");
});
app.listen(8080);
