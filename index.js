require("dotenv").config();
const express = require("express");
const getData = require("./selenium");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", async (req, res) => {
  res.send("hello");
});
app.get("/video", async (req, res) => {
  const data = await getData("video");
  res.send(data);
});
app.get("/memoria", async (req, res) => {
  const data = await getData("memoria");
  res.send(data);
});
app.get("/fonte", async (req, res) => {
  const data = await getData("fonte");
  res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
