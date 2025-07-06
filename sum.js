const express = require("express");
const app = express();

app.get("/sum", (req, res) => {
  const num1 = parseInt(req.query.one);
  const num2 = parseInt(req.query.two);
  const sum = num1 + num2;
  res.status(200).send(sum.toString());
});
app.listen(3000);
