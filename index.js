require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const { MongoClient } = require('mongodb');
const dns = require('dns');

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/shorturl", bodyParser.json());

// Basic Configuration
const port = process.env.PORT || 3000;

// Allow only specific origins
// const corsOptions = {
//   origin: 'https://www.freecodecamp.org'
// };

// app.use(cors(corsOptions));

app.use(cors());
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });
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
  // console.log(req.body);
  let responseObj = {};
  responseObj.original_url = req.body.url;
  responseObj.short_url = 1;
  // console.log(responseObj);
  return res.json(responseObj);
});

app.get("/api/shorturl/:short_url", function (req, res) {

  console.log('app.get: api/shorturl/:short_url fired');
  console.log(req.params);
  if (req.params.short_url == 1) {
    console.log('execute redirect here');
    // return  res.json({redirectuser: "redirectuser"});
    res.redirect('https://www.google.com');
  } else {
    console.log('invalid short_url');
    console.log(res);
    return  res.json({invalidshorturl: "invalidshorturl"});

  }
});

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
