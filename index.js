require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/shorturl", bodyParser.json());

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());
app.use("/public", express.static(`${process.cwd()}/public`));
app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

// Your first API endpoint
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

//LEFT: complete last 2 tests
app.post("/api/shorturl", function (req, res) {
  console.log("api/shorturl fired");
  console.log(req.body);
  let responseObj = {};
  responseObj.original_url = req.body.url;
  responseObj.short_url = 1;
  console.log(responseObj);
  res.json(responseObj);
});

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
