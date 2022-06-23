require("dotenv").config();
const express = require("express");
const getData = require("./selenium");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", async (req, res) => {
  res.send("hello");
});
app.get("/data", async (req, res) => {
  const data = await getData();
  res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
